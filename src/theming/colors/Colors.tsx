import styled from '@emotion/styled';
import { tier2 } from '../../styles/theme';

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

const Colors = () => (
  <>
    {Object.entries(tier2.color).map(([name, value]) => (
      <CardContainer>
        <ColorCard color={value} /> <span>{name}</span>
      </CardContainer>
    ))}
  </>
);

export default Colors;
