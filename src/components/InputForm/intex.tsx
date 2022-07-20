import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { UseFormRegister, FieldValues } from 'react-hook-form';

import { ErrorMessage, FormInput, IconWrapper } from './styled';

interface Props {
  id: string;
  label: string;
  icon: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  error?: string;
  register: UseFormRegister<FieldValues>;
  onChange?: (text: string) => void;
}

const InputForm = ({
  id,
  label,
  icon,
  placeholder,
  required,
  error,
  register,
  onChange,
}: Props) => {
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
        />
      </InputGroup>
      <ErrorMessage>{error}</ErrorMessage>
    </Form.Group>
  );
};

export default InputForm;
