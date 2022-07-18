import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';

import { FormInput, IconWrapper } from './styled';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  required: boolean;
  register: UseFormRegister<FieldValues>;
}

const InputForm = ({
  id,
  label,
  icon,
  placeholder,
  required,
  register,
}: Props) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>

      <InputGroup>
        <IconWrapper>{icon}</IconWrapper>
        <FormInput placeholder={placeholder} {...register(id, { required })} />
      </InputGroup>
    </Form.Group>
  );
};

export default InputForm;
