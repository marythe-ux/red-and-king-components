import React from 'react';
import styled from '@emotion/styled';

interface ButtonStyledProps {
  size?: 'small' | 'medium' | 'large';
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
        return `
          color: #000000;
          background-color: #eaeaea;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 1px 2px inset;
        `;
      default:
        return `
          color: #ffc4e3;
          background-color: #009179;
        `;
    }
  },
  hoverColor({ color }: ButtonStyledProps) {
    switch (color) {
      case 'secondary':
        return `
          color: #333333;
          background-color: #ffffff;
        `;
      default:
        return `
          color: #ffffff;
          background-color: #005161;
        `;
    }
  },
  size({ size }: ButtonStyledProps) {
    switch (size) {
      case 'small':
        return `
          font-size: 12px;
          padding: 10px 16px;
        `;
      case 'large':
        return `
          font-size: 16px;
          padding: 12px 24px;
        `;
      default:
        return `
          font-size: 14px;
          padding: 11px 20px;
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
