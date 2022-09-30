const baseConfig = require('./style-dictionary-config.json');
const ChangeCase = require('change-case');
const fs = require('fs');
const StyleDictionary = require('style-dictionary');

const inheritTokensSetNamesInAliases = calBack => {
  const tokensFileName = baseConfig.source[0];
  const designTokens = require(`./${tokensFileName}`);

  const newSourceFileName = `---${tokensFileName}`;

  const tokenSetNames = [...designTokens.$metadata.tokenSetOrder].reverse();

  const tokensWithInheritSetInAliases = tokenSetNames.reduce(
    (tokens, tokenSetName, index) => {
      const parentTokenSetName = tokenSetNames?.[index + 1] ?? tokenSetName;

      tokens[tokenSetName] = JSON.parse(
        JSON.stringify(tokens[tokenSetName]).replace(
          /("[^"]+":"\{)([^}]+)(\}[^(}|")]*")/g,
          `$1${parentTokenSetName}.$2$3`
        )
      );

      return tokens;
    },
    Object.assign({}, designTokens)
  );

  fs.writeFileSync(
    newSourceFileName,
    JSON.stringify(tokensWithInheritSetInAliases, null, 2)
    // JSON.stringify(designTokens, null, 2)
  );

  calBack(newSourceFileName);

  fs.unlinkSync(newSourceFileName);
};

inheritTokensSetNamesInAliases(newSourceFileName => {
  StyleDictionary.registerTransform({
    name: 'size/px',
    type: 'value',
    matcher: ({ unit, type, value }) =>
      (unit === 'pixel' || type === 'dimension') && value !== 0,
    transformer: ({ value }) => `${value}px`,
  });

  const calcPxRegExp = new RegExp(
    '([0-9]+[a-z]*)[s]*([*+%-]{1})[s]*([0-9])+',
    'i'
  );
  StyleDictionary.registerTransform({
    name: 'calc/px',
    type: 'value',
    transitive: true,
    matcher: ({ value }) => calcPxRegExp.test(value),
    transformer: ({ value }) => value.replace(calcPxRegExp, 'calc($1 $2 $3)'),
  });

  StyleDictionary.registerTransform({
    name: 'typography',
    type: 'value',
    transitive: true,
    matcher: ({ type }) => type === 'typography',
    transformer: ({ value }) =>
      Object.entries(value).reduce((css, [cssProp, cssValue]) => {
        cssProp = ChangeCase.paramCase(cssProp);

        if (cssProp === 'paragraph-spacing') {
          cssProp = 'margin';
          cssValue = `${cssValue} 0`;
        }
        if (cssProp === 'text-case') {
          cssProp = 'text-transform';
        }
        if (cssProp === 'font-family') {
          cssValue = `'${cssValue}'`;
        }
        if (cssProp === 'font-weight') {
          switch (cssValue) {
            case 'Bold':
              cssValue = 'bold';
              break;
            case 'Medium':
            default:
              cssValue = 'normal';
              break;
          }
        }

        return `${css}${cssProp}: ${cssValue}; `;
      }, ''),
  });

  const StyleDictionaryExtended = StyleDictionary.extend({
    ...baseConfig,
    source: [newSourceFileName],
  });

  StyleDictionaryExtended.buildAllPlatforms();
});
