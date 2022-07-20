// Erros de validação
export var FULL_NAME_ERROR =
  "Nome inválido.Digite o seu nome completo e evite caracteres especiais ' * () : ! ; /  '";

export var EMAIL_ERROR =
  "Email inválido. O email precisa conter os caracteres '@' e '.', exemplo: comujovem@gmail.com"

// Regex validation register
export var REGEX_SPECIAL_CHARACTERS = /(?=.*[}{,.^?~=+@\\-_\/*\-+.\\|])(?=.*)./g;
export var REGEX_VALIDATE_EMAIL = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
