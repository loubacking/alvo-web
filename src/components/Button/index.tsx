import React from 'react';
import { ContainerButton, TitleButton } from './styled';

export type ButtonProps = {
  title: string;
  fontSize?: number;
  color?: string;
  background?: string;
  hoverBackground?: string;
  marginTop?: number;
  marginBottom?: number;
  onClick?: () => void;
};

const Button = ({
  title,
  fontSize,
  color,
  background,
  hoverBackground,
  marginTop,
  marginBottom,
  onClick,
}: ButtonProps) => (
  <ContainerButton
    onClick={onClick}
    background={background}
    hoverBackground={hoverBackground}
    marginTop={marginTop}
    marginBottom={marginBottom}
  >
    <TitleButton fontSize={fontSize} color={color}>
      {title}
    </TitleButton>
  </ContainerButton>
);

export default Button;
