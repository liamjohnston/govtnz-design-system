import fs from 'fs';
import os from 'os';
import path from 'path';
import cssParser from 'postcss-safe-parser';
import { CSSVariablePattern } from '@springload/metatemplate';
import { isEqual } from 'lodash';

export const safeMergeCssVariables = (
  ...cssVariableArrays: CSSVariablePattern[][]
): CSSVariablePattern[] => {
  const usedIds: string[] = [];
  const newArr: CSSVariablePattern[] = [];

  for (let i = 0; i < cssVariableArrays.length; i++) {
    const cssVariableArray = cssVariableArrays[i];
    if (cssVariableArray && cssVariableArray.length) {
      for (let x = 0; x < cssVariableArray.length; x++) {
        const cssVariable = cssVariableArray[x];
        if (usedIds.includes(cssVariable.id)) {
          const previousCssVariableWithSameId = newArr.find(
            cssVar => cssVar.id === cssVariable.id
          );
          if (!isEqual(previousCssVariableWithSameId, cssVariable)) {
            throw new Error(
              `Can't merge CSSVariable ${
                cssVariable.id
              } because different values. ${JSON.stringify(
                previousCssVariableWithSameId
              )} !== ${JSON.stringify(cssVariable)}`
            );
          }
        } else {
          usedIds.push(cssVariable.id);
          newArr.push(cssVariable);
        }
      }
    }
  }
  return newArr;
};

// From NPM's split-css-selector
// Licenced under MIT
// Thanks to @joakimbeng for this useful function
export function splitSelectors(selectors) {
  function isAtRule(selector) {
    return selector.indexOf('@') === 0;
  }
  if (isAtRule(selectors)) {
    return [selectors];
  }
  var splitted = [];
  var parens = 0;
  var angulars = 0;
  var soFar = '';
  for (var i = 0, len = selectors.length; i < len; i++) {
    var char = selectors[i];
    if (char === '(') {
      parens += 1;
    } else if (char === ')') {
      parens -= 1;
    } else if (char === '[') {
      angulars += 1;
    } else if (char === ']') {
      angulars -= 1;
    } else if (char === ',') {
      if (!parens && !angulars) {
        splitted.push(soFar.trim());
        soFar = '';
        continue;
      }
    }
    soFar += char;
  }
  splitted.push(soFar.trim());
  return splitted;
}

export const cssPropertiesToObject = (propertiesString: string): AnyObject => {
  const cssRoot = cssParser(propertiesString);
  const properties: AnyObject = {};
  cssRoot.nodes.forEach(node => {
    if (node.type !== 'decl')
      throw Error(
        `replaceCSS given unknown CSS replacement string that was parsed as node type of "${node.type}" from "${propertiesString}"`
      );
    properties[node.prop] = node.value;
  });
  return properties;
};

export type AnyObject = {
  [key: string]: string;
};

export const gc = () => {
  if (global && global.gc) {
    global.gc();
  } else {
    console.log('Manual GC inactive. Run Node with --inspect flag.');
  }
};

const getLocalTemplateDefinitionData = async (
  source: string,
  version: 'any' | string
): Promise<TemplatesDefinition | undefined> => {
  const defPath = path.resolve(
    __dirname,
    'template-definitions',
    source,
    version,
    'definitions.json'
  );
  let data;
  try {
    data = (
      await fs.promises.readFile(defPath, {
        encoding: 'utf-8'
      })
    ).toString();
  } catch (e) {
    // pass
  }
  return data ? JSON.parse(data) : undefined;
};

export const getLocalTemplateDefinitions = async (
  source: string,
  version: string,
  id: string
): Promise<TemplateDefinition> => {
  const anyDef = await getLocalTemplateDefinitionData(source, 'any');

  const versionDef = await getLocalTemplateDefinitionData(source, version);

  const versionUsed = versionDef && versionDef.templates[id] ? version : 'any';
  const def =
    versionUsed === 'any'
      ? anyDef && anyDef.templates[id]
      : versionDef && versionDef.templates[id];
  if (def === undefined) {
    return;
  }
  def.path = `${__dirname}/template-definitions/${source}/${versionUsed}/${def.filename}`;
  def.html = (
    await fs.promises.readFile(def.path as string, {
      encoding: 'utf-8'
    })
  ).toString();
  return def;
};

type TemplatesDefinition = {
  templates: {
    [key: string]: TemplateDefinition;
  };
};

type TemplateDefinition = {
  filename: string;
  path?: string;
  html?: string;
  id?: string;
};
