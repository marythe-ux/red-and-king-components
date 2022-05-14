import styled from '@emotion/styled';
import getCorrectTextColor from './getCorrectTextColor';

interface ColorCardProps {
  color: string;
}

const ColorCard = styled('span')<ColorCardProps>`
  width: 70px;
  height: 70px;
  display: inline-block;
  background-color: ${({ color }) => color};
  color: ${({ color }) => getCorrectTextColor(color)};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default ColorCard;
