// Regex 

import { PASSWORD_MIN_LENGTH } from "../validations/passwordValidation";

//validation register
export var REGEX_SPECIAL_CHARACTERS = /(?=.*[}{,.^?~=+@\\-_\/*\-+.\\|])(?=.*)./g;
export var REGEX_VALIDATE_EMAIL = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


// String

// Erros de validação
export var FULL_NAME_ERROR = "Nome inválido. Digite o seu nome completo e evite caracteres especiais ' * () : ! ; /  '";
export var EMAIL_ERROR = "Email inválido. O email precisa conter os caracteres '@' e '.', exemplo: comujovem@gmail.com";

// Tags de validação de senha
export var CHECK_MIN_LENGTH = `Contém no mínimo ${PASSWORD_MIN_LENGTH} dígitos.`;
export var HAS_AT_LEAST_ONE_CAPITAL_LETTER = 'Contém pelo menos uma letra maiúscula.';
export var EQUALS_PASSWORD = 'Senha e confirmação de senha são iguals.';

// Página de cadastro 

// LABELS
export var FULL_NAME_LABEL = 'Nome completo *';
export var EMAIL_LABEL = 'Email *';
export var PASSWORD_LABEL = 'Senha *';
export var PASSWORD_CONFIRMATION_LABEL = 'Confirmar senha *';

// PLACEHOLDER
export var FULL_NAME_PLACEHOLDER = 'Digite seu nome aqui';
export var EMAIL_PLACEHOLDER = 'Ex: comujovem@gmail.com';
export var PASSWORD_PLACEHOLDER = `Mínimo ${PASSWORD_MIN_LENGTH} digitos...`;
export var PASSWORD_CONFIRMATION_PLACEHOLDER = `Mínimo ${PASSWORD_MIN_LENGTH} digitos...`;

// TITLE
export var REGISTER_BUTTON_TEXT = 'Cadastrar';




