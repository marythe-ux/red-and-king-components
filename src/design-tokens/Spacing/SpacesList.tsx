import styled from '@emotion/styled';
import designTokens from '../../../design-tokens.json';
import { tier1 } from '../../styles/theme';
import { DesignTokensData, DesignTokensItem } from '../DesignTokensInterfaces';

const colorData = designTokens.global as DesignTokensData;

const SpaceItem = styled(({ className, name, value }) => (
  <div className={className}>
    <p className="title">{name}</p>
    <p className="space" />
  </div>
))`
  margin: 2px 10px;
  display: flex;
  background-color: #f8f8f8;
  .title {
    width: 80px;
    padding: 8px;
    margin: 0;
    text-align: right;
  }
  .space {
    margin: 0;
    font-size: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: ${tier1.GlobalPrimary100};
    width: ${({ value }) => `${value}px`};
    &::before {
      content: ' ${({ value }) => `${value}px`}';
      display: block;
      padding-left: 4px;
    }
  }
`;

const SpacesList = () => (
  <>
    <h1>Design tokens spacing</h1>

    {Object.entries(colorData).map(([spacingName, value]) => {
      if (value.type === 'spacing') {
        const spacingDataItem = value as DesignTokensItem;
        return <SpaceItem name={spacingName} value={spacingDataItem.value} />;
      }
      return null;
    })}
  </>
);

export default SpacesList;
