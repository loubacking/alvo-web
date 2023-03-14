// Regex

import { PASSWORD_MIN_LENGTH } from '../validations/passwordValidation';

//validation register
export const REGEX_SPECIAL_CHARACTERS = /(?=.*[}{,.^?~=+@\\-_\/*\-+.\\|])(?=.*)./g;
export const REGEX_VALIDATE_EMAIL = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// String

// Erros de validação
export const FULL_NAME_ERROR =
  "Nome inválido. Digite o seu nome completo e evite caracteres especiais ' * () : ! ; /  '";
export const EMAIL_ERROR =
  "Email inválido. O email precisa conter os caracteres '@' e '.', exemplo: alvo@email.com";

// Tags de validação de senha
export const CHECK_MIN_LENGTH = `Contém no mínimo ${PASSWORD_MIN_LENGTH} dígitos.`;
export const HAS_AT_LEAST_ONE_CAPITAL_LETTER =
  'Contém pelo menos uma letra maiúscula.';
export const EQUALS_PASSWORD = 'Senha e confirmação de senha são iguais.';

// Página de cadastro

// LABELS
export const FULL_NAME_LABEL = 'Nome completo *';
export const EMAIL_LABEL = 'Email *';
export const PASSWORD_LABEL = 'Senha *';
export const PASSWORD_CONFIRMATION_LABEL = 'Confirmar senha *';

// PLACEHOLDER
export const FULL_NAME_PLACEHOLDER = 'Digite seu nome aqui';
export const EMAIL_PLACEHOLDER = 'Ex: alvo@email.com';
export const PASSWORD_PLACEHOLDER = `Mínimo ${PASSWORD_MIN_LENGTH} digitos`;
export const PASSWORD_CONFIRMATION_PLACEHOLDER = `Mínimo ${PASSWORD_MIN_LENGTH} digitos`;

// TITLE
export const REGISTER_BUTTON_TEXT = 'Cadastrar';
