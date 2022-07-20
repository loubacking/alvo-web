import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Button, Footer, InputForm } from '../../components';
import CheckPassword from './components/CheckPassword';
import logo from '../../assets/images/logo-alvo.png';

import { createUser } from '../../api/auth';
import {
  validationEmail,
  validationFullName,
} from './validations/registerValidation';

import {
  EMAIL_ERROR,
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  FULL_NAME_ERROR,
  FULL_NAME_LABEL,
  FULL_NAME_PLACEHOLDER,
  PASSWORD_CONFIRMATION_LABEL,
  PASSWORD_CONFIRMATION_PLACEHOLDER,
  PASSWORD_LABEL,
  PASSWORD_PLACEHOLDER,
  REGISTER_BUTTON_TEXT,
} from './constants';
import { RegisterType } from './types';

import { HeaderContainer, Logo, Title } from './styled';

const Register = () => {
  const { register, handleSubmit } = useForm();

  const [fullNameError, setFullNameError] = useState<string>('');
  const [EmailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<boolean>(false);

  const onSubmit = (data) => {
    registerValidation(data);
  };

  const registerValidation = async (registerData: RegisterType) => {
    const isValidFullName = validationFullName(registerData.fullName);
    const isValidEmail = validationEmail(registerData.email);
    const isValidPassword = checkPassword;

    if (!isValidFullName) {
      setFullNameError(FULL_NAME_ERROR);
    }

    if (!isValidEmail) {
      setEmailError(EMAIL_ERROR);
    }

    if (isValidFullName && isValidEmail) {
      setEmptyValues();
    }

    if (isValidFullName && isValidEmail && isValidPassword) {
      await handleCreateUser(registerData);
    }
  };

  const handleCreateUser = async (user: RegisterType) => {
    await createUser(user);
  };

  const setEmptyValues = () => {
    setFullNameError('');
    setEmailError('');
  };

  const handleCheckedValidationPassword = (isChecked: boolean) => {
    setCheckPassword(isChecked);
  };

  return (
    <>
      <Container className="mb-5">
        <Row>
          <HeaderContainer>
            <Title>Registrar</Title>
            <Link to={{ pathname: '/' }}>
              <Logo src={logo} alt="Alvo Cifras Logo" />
            </Link>
          </HeaderContainer>
        </Row>

        <InputForm
          id="fullName"
          icon={<FaUser />}
          label={FULL_NAME_LABEL}
          placeholder={FULL_NAME_PLACEHOLDER}
          register={register}
          required
          error={fullNameError}
        />

        <InputForm
          id="email"
          icon={<FaEnvelope />}
          label={EMAIL_LABEL}
          placeholder={EMAIL_PLACEHOLDER}
          register={register}
          required
          error={EmailError}
        />

        <InputForm
          id="password"
          icon={<FaLock />}
          label={PASSWORD_LABEL}
          placeholder={PASSWORD_PLACEHOLDER}
          register={register}
          password
          onChange={(text) => setPassword(text)}
          required
        />
        <CheckPassword
          password={password}
          passwordConfirmation={passwordConfirmation}
          isCheckPassword={handleCheckedValidationPassword}
        />

        <InputForm
          id="passwordConfirmation"
          icon={<FaLock />}
          label={PASSWORD_CONFIRMATION_LABEL}
          placeholder={PASSWORD_CONFIRMATION_PLACEHOLDER}
          register={register}
          password
          onChange={(text) => setPasswordConfirmation(text)}
          required
        />
        <CheckPassword
          password={password}
          passwordConfirmation={passwordConfirmation}
          isCheckPassword={handleCheckedValidationPassword}
        />

        <Button
          title={REGISTER_BUTTON_TEXT}
          onClick={handleSubmit(onSubmit)}
          marginTop={30}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Register;
