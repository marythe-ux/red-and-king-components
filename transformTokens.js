const fs = require('fs');
const StyleDictionary = require('style-dictionary');
const baseConfig = require('./style-dictionary-config.json');

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
          /("[^"]+":"\{)([^}]+)(\}")/g,
          `$1${parentTokenSetName}.$2$3`
        )
      );

      return tokens;
    },
    designTokens
  );

  fs.writeFileSync(
    newSourceFileName,
    JSON.stringify(tokensWithInheritSetInAliases, null, 2)
  );

  calBack(newSourceFileName);

  fs.unlinkSync(newSourceFileName);
};

inheritTokensSetNamesInAliases(newSourceFileName => {
  StyleDictionary.registerTransform({
    name: 'size/px',
    type: 'value',
    matcher: token => {
      return (
        (token.unit === 'pixel' || token.type === 'dimension') &&
        token.value !== 0
      );
    },
    transformer: token => {
      return `${token.value}px`;
    },
  });

  StyleDictionary.registerTransform({
    name: 'size/percent',
    type: 'value',
    matcher: token => {
      return token.unit === 'percent' && token.value !== 0;
    },
    transformer: token => {
      return `${token.value}%`;
    },
  });

  const StyleDictionaryExtended = StyleDictionary.extend({
    ...baseConfig,
    source: [newSourceFileName],
  });

  StyleDictionaryExtended.buildAllPlatforms();
});
