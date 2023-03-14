import { useEffect, useState } from 'react';
import {
  CHECK_MIN_LENGTH,
  EQUALS_PASSWORD,
  HAS_AT_LEAST_ONE_CAPITAL_LETTER
} from '../../constants';

import {
  checkEqualsPassword,
  haveMinLength,
  hasAtLeastOneCapitalLetter
} from '../../validations/passwordValidation';
import CheckTag from '../CheckTag';
import { Container } from './styled';

type CheckPasswordProps = {
  password: string;
  passwordConfirmation: string;
  isCheckPassword: (isChecked: boolean) => void;
};

const CheckPassword = ({
  password,
  passwordConfirmation,
  isCheckPassword
}: CheckPasswordProps) => {
  const [checkMinLength, setCheckMinLength] = useState<boolean>(false);
  const [initBigLetter, setInitBigLetter] = useState<boolean>(false);
  const [equalsPassword, setEqualsPassword] = useState<boolean>(false);

  useEffect(() => {
    handleCheckTags();
  }, [password, passwordConfirmation]);

  const handleCheckTags = () => {
    setCheckMinLength(haveMinLength(password));

    setInitBigLetter(hasAtLeastOneCapitalLetter(password));

    setEqualsPassword(checkEqualsPassword(password, passwordConfirmation));

    isChecked(
      haveMinLength(password),
      hasAtLeastOneCapitalLetter(password),
      checkEqualsPassword(password, passwordConfirmation)
    );
  };

  const isChecked = (
    isCheckMinLength: boolean,
    hasAtLeastOneCapitalLetter: boolean,
    isCheckEqualsPassword: boolean
  ) => {
    if (
      isCheckMinLength &&
      hasAtLeastOneCapitalLetter &&
      isCheckEqualsPassword
    ) {
      isCheckPassword(true);
    }
  };

  return (
    <Container>
      <CheckTag title={CHECK_MIN_LENGTH} status={checkMinLength} />
      <CheckTag
        title={HAS_AT_LEAST_ONE_CAPITAL_LETTER}
        status={initBigLetter}
      />
      <CheckTag title={EQUALS_PASSWORD} status={equalsPassword} />
    </Container>
  );
};

export default CheckPassword;
