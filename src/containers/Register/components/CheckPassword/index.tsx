import React, { useEffect, useState } from 'react';
import {
  CHECK_MIN_LENGTH,
  EQUALS_PASSWORD,
  INIT_BIG_LETTER,
} from '../../constants';

import {
  checkEqualsPassword,
  haveMinLength,
  isInitBigLetter,
} from '../../validations/passwordValidation';
import CheckTag from '../CheckTag';
import { Container } from './styled';

type Props = {
  password: string;
  passwordConfirmation: string;
  isCheckPassword: (isChecked: boolean) => void;
};

const CheckPassword = ({
  password,
  passwordConfirmation,
  isCheckPassword,
}: Props) => {
  const [checkMinLength, setCheckMinLength] = useState<boolean>(false);
  const [initBigLetter, setInitBigLetter] = useState<boolean>(false);
  const [equalsPassword, setEqualsPassword] = useState<boolean>(false);

  useEffect(() => {
    handleCheckTags();
  }, [password, passwordConfirmation]);

  const handleCheckTags = () => {
    setCheckMinLength(haveMinLength(password));

    setInitBigLetter(isInitBigLetter(password));

    setEqualsPassword(checkEqualsPassword(password, passwordConfirmation));

    isChecked(
      haveMinLength(password),
      isInitBigLetter(password),
      checkEqualsPassword(password, passwordConfirmation),
    );
  };

  const isChecked = (
    isCheckMinLength: boolean,
    isInitBigLetter: boolean,
    isCheckEqualsPassword: boolean,
  ) => {
    if (isCheckMinLength && isInitBigLetter && isCheckEqualsPassword) {
      isCheckPassword(true);
    }
  };

  return (
    <Container>
      <CheckTag title={CHECK_MIN_LENGTH} status={checkMinLength} />
      <CheckTag title={INIT_BIG_LETTER} status={initBigLetter} />
      <CheckTag title={EQUALS_PASSWORD} status={equalsPassword} />
    </Container>
  );
};

export default CheckPassword;
