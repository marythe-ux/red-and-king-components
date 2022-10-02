import designTokens from 'red-and-king-components-tokens/design-tokens.json';
import {
  DesignTokensData,
  DesignTokensItem,
  DesignTokensItems,
} from '../DesignTokensInterfaces';
import ColorCard from './ColorCard';
import ColorCardsList from './ColorCardsList';

const colorData = designTokens['topdone-core'].color as DesignTokensData;

const ColorsList = () => (
  <>
    <h1>Design tokens colors</h1>

    {Object.entries(colorData).map(([colorName, value], index) => {
      if (value.type === 'color') {
        const colorDataItem = value as DesignTokensItem;
        return (
          <ColorCardsList colorName={colorName} key={index}>
            <ColorCard color={colorDataItem.value}>
              {colorName}
              <br />
              {colorDataItem.value}
            </ColorCard>
          </ColorCardsList>
        );
      }

      if (value.type == null || Object.values(value)[0].type === 'color') {
        const colorDataItems = value as DesignTokensItems;
        return (
          <ColorCardsList colorName={colorName} key={index}>
            {Object.entries(colorDataItems).map(
              ([colorKey, colorDataItem], index) => (
                <ColorCard color={colorDataItem.value} key={index}>
                  {colorKey}
                  <br />
                  {colorDataItem.value}
                </ColorCard>
              )
            )}
          </ColorCardsList>
        );
      }

      return null;
    })}
  </>
);

export default ColorsList;
