import React from 'react';
interface ButtonStyledProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
}
interface ButtonProps extends ButtonStyledProps {
  label: string;
  onClick?: () => void;
}
export declare const ButtonStyled: import('@emotion/styled-base').StyledComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  ButtonStyledProps,
  object
>;
declare const Button: ({
  label,
  size,
  color,
  onClick,
}: ButtonProps) => JSX.Element;
export default Button;
