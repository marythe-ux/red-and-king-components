import { css } from '@emotion/css';
import { cssVariables } from '../../styles/theme';

interface ButtonStyledProps {
  size?: 'small' | 'default' | 'large';
  color?: 'primary' | 'secondary';
}
interface ButtonProps extends ButtonStyledProps {
  label: string;
  onClick?: () => void;
}

const cssClassName = css`
  cursor: pointer;
  display: inline-block;
  transition: color 0.5s ease, background-color 0.5s ease;
  border: none;
`;

const getCssClassNameForSize = ({ size }: ButtonStyledProps): string => {
  switch (size) {
    case 'small':
      return css`
        ${cssVariables.topdoneComponentsTypographyButtonMd}
        padding: ${`${cssVariables.topdoneComponentsPaddingButtonSmallVertical} ${cssVariables.topdoneComponentsPaddingButtonSmallHorizontal}`};
        border-radius: ${cssVariables.topdoneComponentsRadiusButton};
      `;
    case 'large':
      return css`
        ${cssVariables.topdoneComponentsTypographyButtonLg}
        padding: ${`${cssVariables.topdoneComponentsPaddingButtonLargeVertical} ${cssVariables.topdoneComponentsPaddingButtonLargeHorizontal}`};
        border-radius: ${cssVariables.topdoneComponentsRadiusButton};
      `;
    case 'default':
    default:
      return css`
        ${cssVariables.topdoneComponentsTypographyButtonMd}
        padding: ${`${cssVariables.topdoneComponentsPaddingButtonMediumVertical} ${cssVariables.topdoneComponentsPaddingButtonMediumHorizontal}`};
        border-radius: ${cssVariables.topdoneComponentsRadiusButton};
      `;
  }
};

const getCssClassNameForColor = ({ color }: ButtonStyledProps): string => {
  switch (color) {
    case 'secondary':
      return css`
        box-shadow: ${`inset 0px 0px 0px  ${cssVariables.topdoneComponentsBorderButtonSecondaryDefault}  ${cssVariables.topdoneComponentsColorBorderButtonSecondaryDefault}`};
        color: ${cssVariables.topdoneComponentsColorTextButtonSecondaryDefault};
        background-color: ${cssVariables.topdoneComponentsColorBackgroundButtonSecondaryDefault};
        &:hover {
          color: ${cssVariables.topdoneComponentsColorTextButtonSecondaryHover};
          background-color: ${cssVariables.topdoneComponentsColorBackgroundButtonSecondaryHover};
        }
      `;
    case 'primary':
    default:
      return css`
        color: ${cssVariables.topdoneComponentsColorTextButtonPrimaryDefault};
        background-color: ${cssVariables.topdoneComponentsColorBackgroundButtonPrimaryDefault};
        &:hover {
          background-color: ${cssVariables.topdoneComponentsColorBackgroundButtonPrimaryHover};
        }
      `;
  }
};

const getStyledClassNames = (props: ButtonStyledProps): string =>
  [
    cssClassName,
    getCssClassNameForSize(props),
    getCssClassNameForColor(props),
  ].join(' ');

const Button = ({ label, size, color, onClick }: ButtonProps): JSX.Element => (
  <button
    className={getStyledClassNames({ color, size })}
    onClick={onClick}
    type="button"
  >
    {label}
  </button>
);

export default Button;
