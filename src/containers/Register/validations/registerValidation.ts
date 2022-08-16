import { REGEX_SPECIAL_CHARACTERS, REGEX_VALIDATE_EMAIL } from '../constants';

function isEmpty(str: string): boolean {
  return str.length == 0;
}

function containsSpecialCharacters(str: string): boolean {
  return str.match(REGEX_SPECIAL_CHARACTERS) !== null;
}

function isRegularEmail(email: string): boolean {
  return email.match(REGEX_VALIDATE_EMAIL) !== null;
}

function validateFullName(name: string): boolean {
  if (isEmpty(name.trim())) {
    return false;
  } else if (containsSpecialCharacters(name.trim())) {
    return false;
  }

  return true;
}

function validateEmail(email: string): boolean {
  if (isEmpty(email.trim())) {
    return false;
  } else if (!isRegularEmail(email.trim())) {
    return false;
  }

  return true;
}

export { validateFullName, validateEmail };
