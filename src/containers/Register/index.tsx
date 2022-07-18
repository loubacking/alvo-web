import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Button, Footer } from '../../components';
import InputForm from '../../components/InputForm/intex';

import { HeaderContainer, Logo, Title } from './styled';

import logo from '../../assets/images/logo-alvo.png';

const Register = () => {
  const { register, handleSubmit } = useForm();

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
          label="Nome"
          placeholder="Digite seu nome aqui"
          register={register}
          required
        />
        <InputForm
          id="email"
          icon={<FaEnvelope />}
          label="Email"
          placeholder="Ex: comujovem@gmail.com"
          register={register}
          required
        />
        <InputForm
          id="password"
          icon={<FaLock />}
          label="Senha"
          placeholder="Mínimo 6 digitos..."
          register={register}
          required
        />
        <InputForm
          id="passwordConfirmation"
          icon={<FaLock />}
          label="Confirmar senha"
          placeholder="Mínimo 6 digitos..."
          register={register}
          required
        />

        <Button title="Cadastrar" />
      </Container>
      <Footer absolute />
    </>
  );
};

export default Register;
