import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { UseFormRegister, FieldValues } from 'react-hook-form';

import { ErrorMessage, FormInput, IconWrapper } from './styled';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
  icon: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  error?: string;
  register: UseFormRegister<FieldValues>;
}

const InputForm = ({
  id,
  label,
  icon,
  placeholder,
  required,
  error,
  register,
}: Props) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>

      <InputGroup>
        <IconWrapper>{icon}</IconWrapper>
        <FormInput placeholder={placeholder} {...register(id, { required })} />
      </InputGroup>
      <ErrorMessage>{error}</ErrorMessage>
    </Form.Group>
  );
};

export default InputForm;
