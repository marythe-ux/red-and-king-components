import styled from '@emotion/styled';
import css from '@emotion/css';
import { cssVariables } from '../../styles/theme';

interface ButtonStyledProps {
  size?: 'small' | 'default' | 'large';
  color?: 'primary' | 'secondary';
}
interface ButtonProps extends ButtonStyledProps {
  label: string;
  onClick?: () => void;
}

const styledPropHandler = {
  color({ color }: ButtonStyledProps) {
    switch (color) {
      case 'secondary':
        return css`
          box-shadow: ${`inset 0px 0px 0px  ${cssVariables.topdoneComponentsBorderButtonSecondaryDefault}  ${cssVariables.topdoneComponentsColorBorderButtonSecondaryDefault}`};
          color: ${cssVariables.topdoneComponentsColorTextButtonSecondaryDefault};
          background-color: ${cssVariables.topdoneComponentsColorBackgroundButtonSecondaryDefault};
        `;
      case 'primary':
      default:
        return css`
          color: ${cssVariables.topdoneComponentsColorBackgroundButtonPrimaryDefault};
          background-color: ${cssVariables.topdoneComponentsColorTextButtonPrimaryDefault};
        `;
    }
  },
  hoverColor({ color }: ButtonStyledProps) {
    switch (color) {
      case 'secondary':
        return css`
          color: ${cssVariables.topdoneComponentsColorTextButtonSecondaryHover};
          background-color: ${cssVariables.topdoneComponentsColorBackgroundButtonSecondaryHover};
        `;
      case 'primary':
      default:
        return css`
          background-color: ${cssVariables.topdoneComponentsColorBackgroundButtonPrimaryHover};
        `;
    }
  },
  size({ size }: ButtonStyledProps) {
    switch (size) {
      case 'small':
        return css`
          ${cssVariables.topdoneComponentsTypographyButtonMd}
          padding: ${`${cssVariables.topdoneComponentsPaddingButtonSmallVertical} ${cssVariables.topdoneComponentsPaddingButtonSmallHorizontal}`};
          border-radius: ${cssVariables.topdoneComponentsRadiusButton};
        `;
      case 'large':
        return css`
          ${cssVariables.topdoneComponentsTypographyButtonMd}
          padding: ${`${cssVariables.topdoneComponentsPaddingButtonMediumVertical} ${cssVariables.topdoneComponentsPaddingButtonMediumHorizontal}`};
          border-radius: ${cssVariables.topdoneComponentsRadiusButton};
        `;
      case 'default':
      default:
        return css`
          ${cssVariables.topdoneComponentsTypographyButtonLg}
          padding: ${`${cssVariables.topdoneComponentsPaddingButtonLargeVertical} ${cssVariables.topdoneComponentsPaddingButtonLargeHorizontal}`};
          border-radius: ${cssVariables.topdoneComponentsRadiusButton};
        `;
    }
  },
};

export const ButtonStyled = styled('button')<ButtonStyledProps>`
  cursor: pointer;
  display: inline-block;
  transition: color 0.5s ease, background-color 0.5s ease;
  ${styledPropHandler.color}
  ${styledPropHandler.size}
  &:hover {
    ${styledPropHandler.hoverColor}
  }
`;

const Button = ({ label, size, color, onClick }: ButtonProps) => (
  <ButtonStyled color={color} onClick={onClick} size={size} type="button">
    {label}
  </ButtonStyled>
);

export default Button;
