import React from 'react';
import { SignInButton, TitleButton } from './styled';

export type ButtonProps = {
  title: string;
  fontSize?: number;
  color?: string;
  background?: string;
  hoverBackground?: string;
  onClick?: () => void;
};

const Button = ({
  title,
  fontSize,
  color,
  background,
  hoverBackground,
  onClick,
}: ButtonProps) => (
  <SignInButton
    onClick={onClick}
    background={background}
    hoverBackground={hoverBackground}
  >
    <TitleButton fontSize={fontSize} color={color}>
      {title}
    </TitleButton>
  </SignInButton>
);

export default Button;
