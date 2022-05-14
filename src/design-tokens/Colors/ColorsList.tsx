import designTokens from '../../../design-tokens.json';
import {
  DesignTokensData,
  DesignTokensItem,
  DesignTokensItems,
} from '../DesignTokensInterfaces';
import ColorCard from './ColorCard';
import ColorCardsList from './ColorCardsList';

const colorData = designTokens.global as DesignTokensData;

const ColorsList = () => (
  <>
    <h1>Design tokens colors</h1>

    {Object.entries(colorData).map(([colorName, value]) => {
      if (value.type === 'color') {
        const colorDataItem = value as DesignTokensItem;
        return (
          <ColorCardsList colorName={colorName}>
            <ColorCard color={colorDataItem.value}>
              {colorName}
              <br />
              {colorDataItem.value}
            </ColorCard>
          </ColorCardsList>
        );
      }

      if (value.type == null) {
        const colorDataItems = value as DesignTokensItems;
        return (
          <ColorCardsList colorName={colorName}>
            {Object.entries(colorDataItems).map(([colorKey, colorDataItem]) => (
              <ColorCard color={colorDataItem.value}>
                {colorKey}
                <br />
                {colorDataItem.value}
              </ColorCard>
            ))}
          </ColorCardsList>
        );
      }

      return null;
    })}
  </>
);

export default ColorsList;
