// Erros de validação
export var FULL_NAME_ERROR = "Nome inválido. Evite caracteres especiais ' * () : ! ; / \ '"

// Regex validation register
export var REGEX_REGULAR_NAME = /^[a-z ,.'-]+$/g
export var REGEX_SPECIAL_CHARACTERS = /(?=.*[}{,.^?~=+\\-_\/*\-+.\\|])(?=.*[a-zA-Z])(?=.*)./g