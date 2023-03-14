import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { CheckIcon, CheckMessage, CheckMessageContainer } from './styled';

type CheckTagProps = {
  title: string;
  status: boolean;
};

const CheckTag = ({ title, status }: CheckTagProps) => {
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
