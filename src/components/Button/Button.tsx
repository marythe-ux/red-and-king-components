import styled from '@emotion/styled';
import css from '@emotion/css';
import { tier3 } from '../../styles/theme';

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
          box-shadow: ${tier3.button.boxShadow.secondary.default};
          color: ${tier3.button.color.secondary.default};
          background-color: ${tier3.button.background.secondary.default};
        `;
      case 'primary':
      default:
        return css`
          color: ${tier3.button.color.primary.default};
          background-color: ${tier3.button.background.primary.default};
        `;
    }
  },
  hoverColor({ color }: ButtonStyledProps) {
    switch (color) {
      case 'secondary':
        return css`
          color: ${tier3.button.color.secondary.hover};
          background-color: ${tier3.button.background.secondary.hover};
        `;
      case 'primary':
      default:
        return css`
          color: ${tier3.button.color.primary.hover};
          background-color: ${tier3.button.background.primary.hover};
        `;
    }
  },
  size({ size }: ButtonStyledProps) {
    switch (size) {
      case 'small':
        return css`
          font-size: 14px;
          line-height: 16px;
          padding: ${tier3.button.padding.small};
          border-radius: ${tier3.button.borderRadius.small};
        `;
      case 'large':
        return css`
          font-size: 24px;
          line-height: 24px;
          padding: ${tier3.button.padding.large};
          border-radius: ${tier3.button.borderRadius.large};
        `;
      case 'default':
      default:
        return css`
          font-size: 14px;
          line-height: 16px;
          padding: ${tier3.button.padding.default};
          border-radius: ${tier3.button.borderRadius.default};
        `;
    }
  },
};

export const ButtonStyled = styled('button')<ButtonStyledProps>`
  font-family: 'Signika';
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
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
