import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { Button, Footer, InputForm } from '../../components';
import { saveAuthToken } from '../../actions';
import { login } from '../../api/auth';
import logo from '../../assets/images/logo-alvo.png';

import {
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  ERROR_DATA,
  PASSWORD_LABEL,
  PASSWORD_PLACEHOLDER,
  TITLE_BUTTON,
} from './constants';
import { LoginTypes } from './types';

import { Container, LoginContainer, Logo, SuggestionText } from './styled';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onSubmit = (data) => {
    formValidation(data);
  };

  const formValidation = async (formData: LoginTypes) => {
    setLoading(true);

    try {
      const req = await login(formData);
      dispatch(saveAuthToken(req.authToken));
      setSuccessLogin();

      setTimeout(() => {
        history.push('/');
      }, 1200);
    } catch (error) {
      const { response } = error as AxiosError;
      handleErrorMessage(response?.status);
    }
  };

  const setSuccessLogin = () => {
    setLoading(false);
    setError('');
    setSuccess(true);
  };

  const handleErrorMessage = (error: number | undefined) => {
    switch (error) {
      case 400:
        setError(ERROR_DATA);
        setLoading(false);
        return;
      default:
        return;
    }
  };

  return (
    <>
      <Container>
        <LoginContainer>
          <Link to={{ pathname: '/' }}>
            <Logo src={logo} alt="Alvo Cifras Logo" />
          </Link>
          <InputForm
            id="email"
            label={EMAIL_LABEL}
            placeholder={EMAIL_PLACEHOLDER}
            icon={<FaUser />}
            register={register}
          />
          <InputForm
            id="password"
            label={PASSWORD_LABEL}
            placeholder={PASSWORD_PLACEHOLDER}
            password
            icon={<FaUser />}
            register={register}
            error={error}
          />
          <SuggestionText
            style={{ color: '#5959BE' }}
            to={{ pathname: '/register' }}
          >
            <span>Não tem cadastro? Faça agora!</span>
          </SuggestionText>
          <Button
            title={TITLE_BUTTON}
            onClick={handleSubmit(onSubmit)}
            loading={loading}
            success={success}
            marginTop={10}
          />
        </LoginContainer>
      </Container>
      <Footer absolute />
    </>
  );
};

export default Login;
