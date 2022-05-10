import styled from '@emotion/styled';
import css from '@emotion/css';
import { tier3 } from '../../styles/theme';

interface ButtonStyledProps {
  size?: 'xSmall' | 'small' | 'default' | 'large';
  color?: 'primary' | 'secondary';
}
interface ButtonProps extends ButtonStyledProps {
  label: string;
  onClick?: () => void;
}

const styledPropHandler = {
  color({ color }: ButtonStyledProps) {
    switch (color) {
      default:
        return css`
          color: ${tier3.button.color.primary.default};
          background-color: ${tier3.button.background.primary.default};
        `;
    }
  },
  hoverColor({ color }: ButtonStyledProps) {
    switch (color) {
      default:
        return css`
          color: ${tier3.button.color.primary.hover};
          background-color: ${tier3.button.background.primary.hover};
        `;
    }
  },
  size({ size }: ButtonStyledProps) {
    switch (size) {
      case 'xSmall':
        return css`
          font-size: ${tier3.button.fontSize.xSmall};
          padding: ${tier3.button.padding.xSmall};
          border-radius: ${tier3.button.borderRadius.xSmall};
        `;
      case 'small':
        return css`
          font-size: ${tier3.button.fontSize.small};
          padding: ${tier3.button.padding.small};
          border-radius: ${tier3.button.borderRadius.small};
        `;
      case 'large':
        return css`
          font-size: ${tier3.button.fontSize.large};
          padding: ${tier3.button.padding.large};
          border-radius: ${tier3.button.borderRadius.large};
        `;
      case 'default':
      default:
        return css`
          font-size: ${tier3.button.fontSize.default};
          padding: ${tier3.button.padding.default};
          border-radius: ${tier3.button.borderRadius.default};
        `;
    }
  },
};

export const ButtonStyled = styled('button')<ButtonStyledProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
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
