const fs = require('fs');
const path = require('path');
const Marked = require('marked');
const glob = require('glob-promise');
const { startCase, uniq } = require('lodash');
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
  autogeneratedFileSignature,
} = require('./utils');
const {
  jsxToUsageCode,
  makeUsage,
  ALL_FORMATS,
} = require('@springload/metatemplate');
const jsxtojson = require('jsx2json');
const rmfr = require('rmfr');

const { writeExamplePage, getExampleHeight } = require('./example');

const generateContentPages = async (
  sectionId,
  templateFormatsById,
  filesToDelete,
  metaTemplateInputsById
) => {
  await rmfr(path.resolve(__dirname, 'static', sectionId));
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
      let result;
      try {
        result = await generatePage(
          sectionId,
          pageId,
          metaTemplateInputsById,
          templateFormatsById
        );
      } catch (e) {
        console.error(e);
        throw e;
      }

      const [
        componentImports,
        generatedComponentPage,
        filesToNotDelete,
      ] = result;

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

  let linkBackPageName = pageId;
  if (sectionId === 'components') {
    componentsJson.forEach(menuSection => {
      menuSection.items.forEach(item => {
        if (pageId === item.id) {
          linkBackPageName = `${item.name} components`;
        }
      });
    });
  }

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
        const message = `In "${sectionId}" with "${pageId}" can't find doc at "${docPath}" or DS "${dsDocPath}".`;
        console.error(message);
        throw new Error(message);
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
      if (level === '1') {
        return (
          `<H1 styleSize="${levelToStyleSize[level]}" id="main-heading"` +
          match.substring(match.indexOf('>'), match.length - '</h1>'.length) +
          `</H${level}>`
        );
      }

      return (
        `<H${level} styleSize="${levelToStyleSize[level]}"` +
        match.substring(3, match.length - 5) +
        `</H${level}>`
      );
    })
    .replace(/<ul>/g, () => {
      // Convert markdown to DS Component
      return '<Ul bulleted>';
    })
    .replace(/<\/ul>/g, () => {
      // Convert markdown to DS Component
      return '</Ul>';
    })
    .replace(/<li>/g, () => {
      // Convert markdown to DS Component
      return '<Li>';
    })
    .replace(/<\/li>/g, () => {
      // Convert markdown to DS Component
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

    const exampleCodes = [];

    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      const counter = i;
      const fullExamples = match.match(exampleRegex);
      const headings = match.match(exampleHeadingRegex);
      if (!fullExamples) {
        throw Error(
          `Unexpected lack of <Example> within an <ExampleContainer>. Code was: ${match}. ${sectionId} . ${pageId}`
        );
      }
      if (fullExamples.length !== 1) {
        throw Error(
          `Unexpected number of examples within an example container of fullExamples.length = ${fullExamples.length}.  ${sectionId} . ${pageId}`
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
          `Example ${counter + 1}`;
        if (!heading.match(/example/i)) {
          heading = `${heading} (${pageId} example)`;
        }
      }

      const exampleRelativePath = `${pageId}__example${counter}`;
      exampleRelativePaths[
        counter
      ] = `/${sectionId}/${exampleRelativePath}.html`;
      exampleTitles[counter] = heading;
      exampleIds[counter] = `iframe_${sectionId}${pageId}${counter}`.replace(
        /[^a-zA-Z0-9_]/g,
        ''
      );

      const exampleSrcPath = await writeExamplePage(
        `${sectionId}/${exampleRelativePath}`,
        fullExample,
        exampleTitles[counter],
        exampleIds[counter],
        `./${pageId}`,
        linkBackPageName
      );

      const exampleHeight = await getExampleHeight(exampleSrcPath);

      exampleHeights[counter] = exampleHeight;

      filesToNotDelete.push(path.resolve(__dirname, '../src', exampleSrcPath));

      const example = fullExample
        .replace(/<ExampleSection>/g, '')
        .replace(/<\/ExampleSection>/g, '')
        .replace(/<ExampleHeading>/g, '')
        .replace(/<\/ExampleHeading>/g, '')
        .replace(/<Example( [\s\S]*?>|>)/g, '')
        .replace(/<\/Example>/g, '')
        .replace(/<MainNavMobileMenuContext>/g, '')
        .replace(/<\/MainNavMobileMenuContext>/g, '');

      try {
        const code = await jsxToUsageCode(example);
        if (docPath.includes('Alerts')) {
          console.log('========================');
          console.log(JSON.stringify(code, null, 2).substring(0, 5000));
          console.log('========================');
          console.log(
            JSON.stringify(metaTemplateInputsById, null, 2).substring(0, 5000)
          );

          console.log('========================');
        }
        const files = await makeUsage(code, metaTemplateInputsById, [
          ALL_FORMATS,
        ]);
        exampleCodes.push(files);
      } catch (e) {
        console.log(`Problem with ${sectionId}/${pageId}: ${example}`);
        console.log(e);
        throw e;
      }
    }

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

      console.log(counter - 1, exampleTitles[counter - 1]);

      return `<Example ${
        isCodeOnly ? 'codeOnly' : ''
      } code={${importName}[${counter - 1}]} iframeProps={{
        id:"${exampleIds[counter - 1]}",
        className: "example__iframe",
        src:"${exampleRelativePaths[counter - 1]}",
        title:"${exampleTitles[counter - 1]}",
        height: ${exampleHeights[counter - 1]}
      }}></Example>`;
    });
  }

  const tagNames = html.match(/<([a-zA-Z0-9]+)/g);

  // because we import these in the template already
  const ComponentIdsThatDontNeedImports = [
    'Example',
    'ExampleSection',
    'ExampleHeading',
    'ExampleContainer',
    'ComponentCode',
    'MainNavMobileMenuContext',
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

  const uniqueReactComponentNames = uniq(reactComponentNames);
  let imports = await Promise.all(
    [...uniqueReactComponentNames, ...importsByName]
      .filter(name => ComponentIdsThatDontNeedImports.indexOf(name) === -1)
      .map(name => {
        // Dev note: importGenerator returns a promise so we're intentionally
        // not awaiting it so that we can pass it to Promise.all()
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
    keys
      .filter(name => ComponentIdsThatDontNeedImports.indexOf(name) === -1)
      .map(async templateId => {
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

const componentsJsonPath = path.resolve(
  __dirname,
  '..',
  'src',
  'commons',
  'component-menu.json'
);
const componentsJson = JSON.parse(
  fs.readFileSync(componentsJsonPath, { encoding: 'utf-8' }).toString()
);

module.exports.generatePage = generatePage;
module.exports.autogeneratedFileSignature = autogeneratedFileSignature;
module.exports.generateContentPages = generateContentPages;
