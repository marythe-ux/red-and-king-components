import styled from '@emotion/styled';
import designTokens from '../../styles/tokens-variables.json';

const ColorCard = styled('span')`
  width: 40px;
  height: 40px;
  display: inline-block;
  margin: 2px;
  background-color: ${({ color }) => color};
  border: solid 1px #ccc;
`;

const CardContainer = styled('div')`
  display: flex;
  align-items: center;
`;

const printColor = (colorData: any): JSX.Element[] => {
  return Object.entries(colorData).map(([name, value]) => (
    <CardContainer>
      <ColorCard color={value as string} /> <span>{name}</span>
    </CardContainer>
  ));
};

const Colors = () => {
  const colors = {
    White: designTokens.ColorWhite,
    Dark: designTokens.ColorDark,
    Secondary: designTokens.ColorSecondary,
    Purple50: designTokens.ColorPurple50,
    Purple100: designTokens.ColorPurple100,
    Purple200: designTokens.ColorPurple200,
    Purple300: designTokens.ColorPurple300,
    Purple400: designTokens.ColorPurple400,
    Purple500: designTokens.ColorPurple600,
    Purple600: designTokens.ColorPurple600,
    Purple700: designTokens.ColorPurple700,
    Purple800: designTokens.ColorPurple800,
    Purple900: designTokens.ColorPurple900,
    SemanticDanger: designTokens.ColorSemanticDanger,
  };

  return <>{printColor(colors)}</>;
};

export default Colors;
