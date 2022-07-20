import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { CheckIcon, CheckMessage, CheckMessageContainer } from './styled';

type Props = {
  title: string;
  status: boolean;
};

const CheckTag = ({ title, status }: Props) => {
  const handleCheckIcon = (status: boolean) => {
    switch (status) {
      case true:
        return <FaCheckCircle />;

      case false:
        return <FaTimesCircle />;
    }
  };

  return (
    <CheckMessageContainer>
      <CheckIcon success={status}>{handleCheckIcon(status)}</CheckIcon>
      <CheckMessage success={status}>{title}</CheckMessage>
    </CheckMessageContainer>
  );
};

export default CheckTag;
