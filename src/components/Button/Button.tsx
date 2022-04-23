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
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 1px 2px inset;
        `;
      default:
        return `
          color: #fff;
          background-color: #009179;
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
  ${styledPropHandler.color}
  ${styledPropHandler.size}
`;

const Button = ({ label, size, color, onClick }: ButtonProps) => (
  <ButtonStyled color={color} onClick={onClick} size={size} type="button">
    {label}
  </ButtonStyled>
);

export default Button;
