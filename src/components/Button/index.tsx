import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { ContainerButton, TitleButton } from './styled';

export type ButtonProps = {
  title: string;
  fontSize?: number;
  color?: string;
  background?: string;
  hoverBackground?: string;
  loading?: boolean;
  success?: boolean;
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
  loading,
  success,
  marginTop,
  marginBottom,
  onClick,
}: ButtonProps) => {
  const [backgroundButton, setBackGroundButton] = useState<string | undefined>(
    background,
  );
  const [hoverBackgroundButton, setHoverBackGroundButton] = useState<
    string | undefined
  >(hoverBackground);
  const [showSuccessButton, setShowSuccessButton] = useState<boolean>(false);

  useEffect(() => {
    handleSuccessButtonType(success);
  }, [success]);

  const RenderSpinner = () => (
    <Spinner animation="border" style={{ color: '#FFFFFF' }} size="sm" />
  );

  const handleSuccessButtonType = (status: boolean | undefined) => {
    if (status) {
      setShowSuccessButton(true);
      setBackGroundButton('#21AB2F');
      setHoverBackGroundButton('#21AB2F');
    }
  };

  return (
    <ContainerButton
      onClick={onClick}
      background={backgroundButton}
      hoverBackground={hoverBackgroundButton}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {loading ? (
        <RenderSpinner />
      ) : showSuccessButton ? (
        <FaCheck color="#FFFFFF" />
      ) : (
        <TitleButton fontSize={fontSize} color={color}>
          {title}
        </TitleButton>
      )}
    </ContainerButton>
  );
};

export default Button;
