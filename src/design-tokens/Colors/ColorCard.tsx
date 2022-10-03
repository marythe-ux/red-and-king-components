import { css } from '@emotion/css';
import getCorrectTextColor from './getCorrectTextColor';

interface ColorCardProps {
  color: string;
  children: React.ReactNode;
}

const cssClassName = css`
  width: 70px;
  height: 70px;
  display: inline-block;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const getCssClassNameForColor = ({ color }: any): string => css`
  background-color: ${color};
  color: ${getCorrectTextColor(color)};
`;

const getStyledClassNames = (props: any): string =>
  [cssClassName, getCssClassNameForColor(props)].join(' ');

const ColorCard = ({ color, children }: ColorCardProps) => (
  <span className={getStyledClassNames({ color })}>{children}</span>
);

export default ColorCard;
