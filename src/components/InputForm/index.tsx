import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { UseFormRegister, FieldValues } from 'react-hook-form';

import { ErrorMessage, FormInput, IconWrapper } from './styled';

interface InputFormProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  placeholder?: string;
  password?: boolean;
  error?: string;
  register: UseFormRegister<FieldValues>;
  onChange?: (text: string) => void;
}

const InputForm = ({
  id,
  label,
  icon,
  placeholder,
  password,
  error,
  register,
  onChange
}: InputFormProps) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>

      <InputGroup>
        <IconWrapper>{icon}</IconWrapper>
        <FormInput
          {...register(id)}
          placeholder={placeholder}
          onChange={(e) => {
            if (onChange !== undefined) {
              onChange(e.target.value);
            }
          }}
          type={password ? 'password' : ''}
        />
      </InputGroup>
      <ErrorMessage>{error}</ErrorMessage>
    </Form.Group>
  );
};

export default InputForm;
