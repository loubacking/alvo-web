import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Button, Footer } from '../../components';
import InputForm from '../../components/InputForm/intex';
import logo from '../../assets/images/logo-alvo.png';

import {
  validationEmail,
  validationFullName,
} from './validations/registerValidation';
import { RegisterType } from './types/type';
import { FULL_NAME_ERROR } from './constants/constants';

import { HeaderContainer, Logo, Title } from './styled';

const Register = () => {
  const { register, handleSubmit } = useForm();

  const [fullNameError, setFullNameError] = useState<string>('');

  const onSubmit = (data) => {
    registerValidation(data);
  };

  const registerValidation = (registerData: RegisterType) => {
    const isValidFullName = validationFullName(registerData.fullName);

    if (!isValidFullName) {
      setFullNameError(FULL_NAME_ERROR);
      return;
    }

    setEmptyValues();
  };

  const setEmptyValues = () => {
    setFullNameError('');
  };

  return (
    <>
      <Container>
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
          label="Nome *"
          placeholder="Digite seu nome aqui"
          register={register}
          required
          error={fullNameError}
        />
        <InputForm
          id="email"
          icon={<FaEnvelope />}
          label="Email *"
          placeholder="Ex: comujovem@gmail.com"
          register={register}
          required
        />
        <InputForm
          id="password"
          icon={<FaLock />}
          label="Senha *"
          placeholder="Mínimo 6 digitos..."
          register={register}
          required
        />
        <InputForm
          id="passwordConfirmation"
          icon={<FaLock />}
          label="Confirmar senha *"
          placeholder="Mínimo 6 digitos..."
          register={register}
          required
        />

        <Button title="Cadastrar" onClick={handleSubmit(onSubmit)} />
      </Container>
      <Footer absolute />
    </>
  );
};

export default Register;
