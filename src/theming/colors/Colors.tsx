import styled from '@emotion/styled';
import { tier2 } from '../../styles/theme';

interface ColorCardProps {
  colorName: 'white' | 'primary' | 'danger';
}
const ColorCard = styled('span')<ColorCardProps>`
  width: 40px;
  height: 40px;
  display: inline-block;
  margin: 2px;
  background-color: ${({ colorName }) => tier2.color[colorName]};
  border: solid 1px #ccc;
`;

const CardContainer = styled('div')`
  display: flex;
  align-items: center;
`;

const Colors = () => (
  <>
    <CardContainer>
      <ColorCard colorName="white" /> <span>white</span>
    </CardContainer>

    <CardContainer>
      <ColorCard colorName="primary" /> <span>primary</span>
    </CardContainer>

    <CardContainer>
      <ColorCard colorName="danger" /> <span>danger</span>
    </CardContainer>
  </>
);

export default Colors;
