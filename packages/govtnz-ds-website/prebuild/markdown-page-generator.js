const fs = require('fs');
const path = require('path');
const Marked = require('marked');
const glob = require('glob-promise');
const puppeteer = require('puppeteer');
const { startCase, uniq, clamp } = require('lodash');
const {
  escapeRegex,
  importGenerator,
  importSourceGenerator,
  getDsPath,
  pathExists,
  insertTemplate,
  writeFile,
  removeMatch,
  pageContentComponentSignature,
} = require('./utils');
const {
  jsxToUsageCode,
  makeUsage,
  ALL_FORMATS,
} = require('@springload/metatemplate');
const jsxtojson = require('jsx2json');

const autogeneratedFileSignature = '// @autogenerated\n';

const generatePage = async (
  sectionId,
  pageId,
  metaTemplateInputsById,
  templateFormatsById
) => {
  // Note that although this doesn't necessarily corrospond to a
  // component from the DS because it might be a 'Grid' or 'Heading'
  // documentation page that groups together several components into
  // one page of documentation.

  let docPath;
  if (sectionId === 'ds') {
    docPath = await getDsPath(`docs/${pageId}.md`);
  } else {
    const sectionPath = path.join(__dirname, '..', `src/docs/${sectionId}`);
    docPath = path.join(sectionPath, `${pageId}.md`);
    const sectionDocPathExists = await pathExists(docPath);
    if (!sectionDocPathExists) {
      console.info(`Can't find ${docPath}`);
    }
    if (sectionId === 'components' && !sectionDocPathExists) {
      const dsDocPath = `docs/${pageId}.md`;
      const componentDocPath = await getDsPath(dsDocPath);
      if (!(await pathExists(componentDocPath))) {
        console.log('\n\n');
        console.trace();
        console.log('\n\n');
        throw new Error(
          `In "${sectionId}" with "${pageId}" can't find doc at "${docPath}" or DS "${dsDocPath}".`
        );
      }
      docPath = componentDocPath;
    }
  }

  const filesToNotDelete = [];
  const rootDir = path.resolve(__dirname, '../..');

  let md = '';
  try {
    md = await fs.promises.readFile(docPath, { encoding: 'utf-8' });
    console.info(
      `Found custom markdown file for ${pageId} at ${docPath.substr(
        rootDir.length + 1
      )}`
    );
  } catch (e) {
    const templateIdFriendlyNames = {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6',
    };

    console.info(
      `Unable to find custom markdown file for ${pageId} at ${docPath.substr(
        rootDir.length + 1
      )} so using default.`
    );
    // use default page
    md = `# ${startCase(templateIdFriendlyNames[pageId] || pageId)}\n`;
  }

  let html = Marked(md, {
    xhtml: true, // because we want valid JSX
  });
  // html = html.replace(/<\/P><\/p>/g, '</P>'); // Marked decides to close tags that weren't ever open. This is a brittle fix but it works...currently.

  let fullImports = [];
  let importsByName = [];

  html = html
    .replace(
      /<h([1-6]).*?>code:([a-zA-Z0-9]+)<\/h[1-6]>/gi,
      (match, headingLevel, componentId) => {
        // We support a subformat within markdown of "code:ComponentName"
        // to display an example and code for that component.
        // The rendered HTML from that component includes headings, so
        // to stay within the correct heading level structurally we
        // allow writing markdown as
        // "## code:ComponentName" to make heading levels start at H2, or
        // "### code:ComponentName" to make heading levels start at H3 etc.
        const trimmedComponentId = componentId.trim();
        importsByName.push(trimmedComponentId);
        const sourceImport = importSourceGenerator(trimmedComponentId);
        fullImports.push(sourceImport);
        return ComponentCode(
          trimmedComponentId,
          templateFormatsById,
          parseInt(headingLevel, 10)
        );
      }
    )
    .replace(/code:([a-zA-Z0-9]+)/gi, (match, componentId) => {
      // Any remaining "code:componentName" that weren't in headings
      // are converted with a default heading level
      const trimmedComponentId = componentId.trim();
      importsByName.push(trimmedComponentId);
      const sourceImport = importSourceGenerator(trimmedComponentId);
      fullImports.push(sourceImport);
      return ComponentCode(trimmedComponentId, templateFormatsById);
    })
    .replace(/<h([1-6]).*?<\/h[1-6]>/, (match, level) => {
      const levelToStyleSize = {
        '1': 'xlarge',
        '2': 'large',
        '3': 'medium',
        '4': 'small',
        '5': 'xsmall',
        '6': 'xxsmall',
      };
      importsByName.push(`H${level}`);
      return (
        `<H${level} styleSize="${levelToStyleSize[level]}"` +
        match.substring(3, match.length - 5) +
        `</H${level}>`
      );
    })
    .replace(/<ul>/g, () => {
      // Convert markdown <ul> to <Ul> DS Components
      return '<Ul bulleted>';
    })
    .replace(/<\/ul>/g, () => {
      // Convert markdown <ul> to <Ul> DS Components
      return '</Ul>';
    })
    .replace(/<li>/g, () => {
      // Convert markdown <ul> to <Ul> DS Components
      return '<Li>';
    })
    .replace(/<\/li>/g, () => {
      // Convert markdown <ul> to <Ul> DS Components
      return '</Li>';
    });

  const exampleContainersRegex = /<ExampleContainer>([\s\S]*?)<\/ExampleContainer>/g;
  const exampleHeadingRegex = /<ExampleHeading>([\s\S]*?)<\/ExampleHeading>/g;
  const exampleRegex = /<Example( [\s\S]*?>|>)([\s\S]*?)<\/Example>/g;

  const matches = html.match(exampleContainersRegex);

  if (matches) {
    const exampleRelativePaths = new Array(matches.length);
    const exampleTitles = new Array(matches.length);
    const exampleHeights = new Array(matches.length);
    const exampleIds = new Array(matches.length);

    const exampleCodes = await Promise.all(
      matches.map(async (match, counter) => {
        const fullExamples = match.match(exampleRegex);
        const headings = match.match(exampleHeadingRegex);
        if (!fullExamples) {
          throw Error(
            `Unexpected lack of <Example> within an <ExampleContainer>. Code was: ${match}`
          );
        }
        if (fullExamples.length !== 1) {
          throw Error(
            `Unexpected number of examples within an example container of fullExamples.length = ${
              fullExamples.length
            }`
          );
        }

        const fullExample = fullExamples[0];

        const exampleAsJS = jsxtojson(fullExample);

        let heading = exampleAsJS.props && exampleAsJS.props.title;
        if (!heading) {
          heading =
            (headings &&
              headings[0] &&
              headings[0].replace(/<[\s\S]*?>/gi, '')) || // remove all tags
            `Example ${counter}`;
        }
        if (!heading.match(/example/i)) {
          heading = `${heading} (${pageId} example)`;
        }

        const exampleRelativePath = `${pageId}__example${counter}`;
        exampleRelativePaths[counter] = exampleRelativePath;
        exampleTitles[counter] = heading;
        exampleIds[counter] = `iframe_${sectionId}${pageId}${counter}`.replace(
          /[^a-zA-Z0-9_]/g,
          ''
        );
        const exampleSrcPath = await writeExamplePage(
          `${sectionId}/${exampleRelativePath}`,
          addOnStateChanged(fullExample),
          exampleTitles[counter],
          exampleIds[counter],
          `../${pageId}`
        );

        const exampleHeight = await getExampleHeight(exampleSrcPath);

        exampleHeights[counter] = exampleHeight;

        filesToNotDelete.push(
          path.resolve(__dirname, '../src', exampleSrcPath)
        );

        const example = fullExample
          .replace(/<ExampleSection>/g, '')
          .replace(/<\/ExampleSection>/g, '')
          .replace(/<ExampleHeading>/g, '')
          .replace(/<\/ExampleHeading>/g, '')
          .replace(/<Example( [\s\S]*?>|>)/g, '')
          .replace(/<\/Example>/g, '');

        try {
          const code = await jsxToUsageCode(example);
          const files = await makeUsage(code, metaTemplateInputsById, [
            ALL_FORMATS,
          ]);
          return files;
        } catch (e) {
          console.log(`Problem with ${sectionId}/${pageId}: ${example}`);
          console.log(e);
          throw e;
        }
      })
    );

    const importName = `${sectionId}__${pageId}`;
    const srcCodePath = path.join('commons', 'examples', importName);
    const examplesPath = path.resolve(
      __dirname,
      '..',
      'src',
      srcCodePath + '.ts'
    );
    let examplesFileCode = `${autogeneratedFileSignature}\n\nexport default ${JSON.stringify(
      exampleCodes,
      null,
      2
    )}`;

    await writeFile(examplesPath, examplesFileCode);
    filesToNotDelete.push(examplesPath);

    fullImports.push(`import ${importName} from '../../${srcCodePath}';`);

    let counter = 0;
    html = html.replace(/<Example( [\s\S]*?>|>)[\s\S]*?<\/Example>/g, match => {
      const isCodeOnly = match.includes('codeOnly');
      counter++;
      if (isCodeOnly) {
        return ''; // nothing to render
      }
      return `<Example code={${importName}[${counter - 1}]} iframeProps={{id:"${
        exampleIds[counter - 1]
      }", className: "example__iframe", id: "${
        exampleIds[counter - 1]
      }", src:"../${exampleRelativePaths[counter - 1]}/", title:"${
        exampleTitles[counter - 1]
      }", height: ${exampleHeights[counter - 1]} }}></Example>`;
    });
  }

  const tagNames = html.match(/<([a-zA-Z0-9]+)/g);

  // because we import these in the template already
  const ComponentIdsThatDontNeedImports = [
    'Example',
    'ExampleSection',
    'ComponentCode',
  ];

  const reactComponentNames =
    tagNames &&
    tagNames
      .map(tag => tag.replace(/^</gi, ''))
      .filter(tag => {
        // All React components in our DS have a capital letter in their name
        return !!tag.match(/[A-Z]/);
      })
      .filter(tag => ComponentIdsThatDontNeedImports.indexOf(tag) === -1);

  html = addOnStateChanged(html);

  const uniqueReactComponentNames = uniq(reactComponentNames);
  let imports = await Promise.all(
    [...uniqueReactComponentNames, ...importsByName].map(name => {
      const code = importGenerator(name);
      if (!code) {
        throw Error(`Unable to find imports for "${name}" from\n${md}`);
      }
      return code;
    })
  );
  imports = uniq([...imports, ...fullImports]);

  const LINEBREAK = '[[LINEBREAK]]';
  html = html
    .replace(/\n/gi, LINEBREAK)
    .replace(/<pre>/gi, '<pre className="language-code">')
    .replace(/<a ([^>]*?)>.*?<\/a>/gi, (match, aAttributes) => {
      // Convert appropriate links to <Link to> to use fast and JS-based
      // lazy-loading rather than <a href> which forces a full page reload
      // between loads.

      // If the hyperlink is offsite then we can't use <Link to>
      // so we want to render a regular <a href>
      if (
        aAttributes.indexOf('https://') !== -1 ||
        aAttributes.indexOf('http://') !== -1
      ) {
        return match;
      }
      // Otherwise use <Link to>
      let link = match
        .replace(/^<a/gi, '<Link')
        .replace(/<\/a>$/gi, '</Link>')
        .replace('href=', 'to=');

      if (link.includes('/components/')) {
        link = link.replace(/to="(.*?)"/, (match, uri) => {
          if (!uri.endsWith('/')) {
            return `to="${uri}/"`;
          }
          return match;
        });
      }

      return link;
    });

  function ComponentCode(componentId, templateFormatsById, headingLevel) {
    const templateFormats = templateFormatsById[componentId];
    if (!templateFormats || !templateFormats.html) {
      console.info(`Note: No HTML found for component "${componentId}".`);
      return ' ';
    }
    return `<ComponentCode Component={${componentId}} templateFormats={${componentId}__templateFormats} startAtHeadingLevel={${headingLevel}}/>`;
  }

  let componentString = `<React.Fragment>${html}</React.Fragment>`
    .replace(new RegExp(escapeRegex(LINEBREAK), 'g'), '\n')
    .replace(/class=/gi, 'className=') // convert HTML to React JSX with class -> className. FIXME: Use a real HTML parser
    .replace(/for=/gi, 'htmlFor='); // convert HTML to React JSX with for -> htmlFor. FIXME: Use a real HTML parser

  return [imports, componentString, filesToNotDelete];
};

const writeExamplePage = async (
  exampleRelativePagePath,
  exampleData,
  title,
  id,
  parentUrl
) => {
  const exampleTemplatePath = path.resolve(
    __dirname,
    '..',
    'src/commons/templates/example-iframe.tsx'
  );

  // because we import these in the template already
  const ComponentIdsThatDontNeedImports = [
    'Example',
    'ExampleSection',
    'ComponentCode',
    'ExampleContainer',
  ];

  const exampleTemplate = await fs.promises.readFile(exampleTemplatePath, {
    encoding: 'utf-8',
  });
  const tagNames = exampleData.match(/<([a-zA-Z0-9]+)/g);
  const reactComponentNames =
    tagNames &&
    tagNames
      .map(tag => tag.replace(/^</gi, ''))
      .filter(tag => {
        // All React components in our DS have a capital letter in their name
        return !!tag.match(/[A-Z]/);
      })
      .filter(tag => ComponentIdsThatDontNeedImports.indexOf(tag) === -1);

  const imports = uniq(reactComponentNames).map(
    reactComponentName =>
      `import ${reactComponentName} from '@govtnz/ds/build/react-ts/${reactComponentName}.tsx';\nimport '@govtnz/ds/build/css/${reactComponentName}.css';\n`
  );
  const WARNING = `${autogeneratedFileSignature}\n// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!\n\n`;
  const page =
    WARNING +
    insertTemplate(
      exampleTemplate,
      {
        id,
        title,
        parentUrl,
      },
      imports.join('')
    ).replace(
      pageContentComponentSignature,
      `const PageContent = (props) => (${exampleData});`
    );
  const srcPath = `pages/${exampleRelativePagePath}.tsx`;
  const examplePath = path.resolve(__dirname, '..', `src/${srcPath}`);
  await fs.promises.writeFile(examplePath, page, { encoding: 'utf-8' });
  return srcPath;
};

const getExampleHeight = async srcPath => {
  // This function starts up Chromium and measures the
  // height of examples so that the <iframe> can be given
  // a specific height and this will reduce onscreen jank.
  //
  // Note that this involves reading files from /public/
  // which will be the previous build so it won't pick up any
  // recent changes. So the determined height will always be
  // one build behind (N - 1) however this is considered
  // acceptable because:
  //
  //    1) there's JavaScript to resize the iframe anyway, so this
  //       initial value isn't particularly important other than to
  //       minimise jank;
  //    2) the alternative before this was a default size of 100px
  //       which was worse, so this is considered an improvement.
  //
  //  ...but feel free to somehow build the site, calculate example
  //  heights, and then update sizes in the pages, and then build the
  //  site again with those sizes, if an N-1 size is too out-of-sync
  //  for you.

  let height = 100;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const npmProjectPath = path.resolve(__dirname, '..');

  const filePath = srcPath
    .substring('pages/'.length)
    .replace(/\.tsx$/, '/index.html');
  const fullFilePath = path.join(npmProjectPath, 'public', filePath);
  const fileUri = `file://${fullFilePath}`;

  try {
    await page.goto(fileUri);
  } catch (e) {
    console.error(
      'Problem calculating height of example at ',
      fileUri,
      ' This might be expected if this is a new example, and re-running this after a `yarn build` should make this error go away.',
      e
    );
  }

  const newHeight = await page.$eval(
    '.css-changes-for-example-only',
    element => element.offsetHeight
  );

  if (
    newHeight.toString().length > 0 &&
    newHeight.toString().replace(/[0-9]/gi, '').length === 0 // if it is entirely a number
  ) {
    height = clamp(parseFloat(newHeight.toString()), 50, 10000);
  }

  await browser.close();
  return height;
};

module.exports.generateComponentPages = async (
  templateFormatsById,
  filesToDelete,
  metaTemplateInputsById
) => {
  const codePreviewPath = path.resolve(
    __dirname,
    '..',
    'src/commons/templates/component-sourcecode.tsx'
  );
  const codeTemplate = await fs.promises.readFile(codePreviewPath, {
    encoding: 'utf-8',
  });
  const componentPageTemplatePath = path.resolve(
    __dirname,
    '..',
    'src/commons/templates/component-template.tsx'
  );
  const pageTemplate = await fs.promises.readFile(componentPageTemplatePath, {
    encoding: 'utf-8',
  });
  const sectionId = 'components';

  const keys = Object.keys(templateFormatsById);

  await Promise.all(
    keys.map(async templateId => {
      const templateFormats = templateFormatsById[templateId];
      // if (!templateFormats.html) {
      //   console.log(`Component without HTML. Template id = "${templateId}"`)
      //   return
      // }
      let imports = [await importGenerator(templateId)];
      const [
        componentImports,
        generatedComponentPage,
        filesToNotDelete,
      ] = await generatePage(
        sectionId,
        templateId,
        metaTemplateInputsById,
        templateFormatsById
      );
      imports = uniq(imports.concat(componentImports));

      filesToNotDelete.forEach(fileToNotDelete => {
        filesToDelete = removeMatch(filesToDelete, fileToNotDelete);
      });

      const WARNING = `${autogeneratedFileSignature}\n// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!\n\n`;
      const code =
        WARNING +
        insertTemplate(
          codeTemplate,
          {
            id: templateId,
            templateFormats,
            name: startCase(templateId),
          },
          imports.join('')
        );
      const targetCodePath = path.resolve(
        __dirname,
        '..',
        'src/components/sourcecode',
        `${templateId}.ts`
      );
      await writeFile(targetCodePath, code);
      filesToDelete = removeMatch(filesToDelete, targetCodePath);

      const page =
        WARNING +
        insertTemplate(
          pageTemplate,
          {
            id: templateId,
          },
          imports.join('')
        )
          .replace(
            'export default function Page(',
            `export default function ${templateId}__Page(`
          )
          .replace(
            pageContentComponentSignature,
            `const PageContent = (props) => ${generatedComponentPage}`
          );

      const targetPagePath = path.resolve(
        __dirname,
        '..',
        'src/pages/components',
        `${templateId}.tsx`
      );
      await writeFile(targetPagePath, page);
      filesToDelete = removeMatch(filesToDelete, targetPagePath);
    })
  );
  return filesToDelete;
};

module.exports.generateContentPages = async (
  sectionId,
  templateFormatsById,
  filesToDelete,
  metaTemplateInputsById
) => {
  const sectionDocsPath = path.resolve(
    __dirname,
    '..',
    `src/docs/${sectionId}`
  );
  const pageIdPattern = path.join(sectionDocsPath, '**.md');
  const pageIds = (await glob(pageIdPattern)).map(docPath =>
    path.basename(docPath, '.md')
  );

  const pageTemplatePath = path.resolve(
    __dirname,
    '..',
    `src/commons/templates/${sectionId}-template.tsx`
  );
  const pageTemplate = await fs.promises.readFile(pageTemplatePath, {
    encoding: 'utf-8',
  });

  await Promise.all(
    pageIds.map(async pageId => {
      let imports = [];

      const [
        componentImports,
        generatedComponentPage,
        filesToNotDelete,
      ] = await generatePage(
        sectionId,
        pageId,
        metaTemplateInputsById,
        templateFormatsById
      );
      imports = uniq(imports.concat(componentImports));

      filesToNotDelete.forEach(fileToNotDelete => {
        filesToDelete = removeMatch(filesToDelete, fileToNotDelete);
      });

      const WARNING = `${autogeneratedFileSignature}\n// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!\n\n`;

      const page =
        WARNING +
        insertTemplate(
          pageTemplate,
          {
            id: pageId,
          },
          imports.join('')
        )
          .replace(
            'export default function Page(',
            `export default function ${pageId}__Page(`
          )
          .replace(
            pageContentComponentSignature,
            `const PageContent = (props) => ${generatedComponentPage}`
          );

      const targetPagePath = path.resolve(
        __dirname,
        '..',
        `src/pages/${sectionId}`,
        `${pageId}.tsx`
      );
      await writeFile(targetPagePath, page);
      filesToDelete = removeMatch(filesToDelete, targetPagePath);
    })
  );
  return filesToDelete;
};

const addOnStateChanged = html => {
  return html.replace(/<[A-Z][^ >]+/g, match => {
    // React Managed Components (as distinct from
    // unmanaged components) need a way to set a value
    // and have an onChange handler, but we don't want
    // that state inside the component itself so we attach
    // a basic wrapper on all DS components
    //
    // DS components start with a capital letter
    const tagName = match.substring(1, match.length);
    const addon = match + ` {...onChangeGenerator(${tagName})}`;
    return addon;
  });
};

module.exports.generatePage = generatePage;
module.exports.autogeneratedFileSignature = autogeneratedFileSignature;
