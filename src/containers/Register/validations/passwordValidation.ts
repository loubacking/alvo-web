function isEmpty(str: string): boolean {
  return str.length === 0;
}

function haveMinLength(password: string): boolean {
  const passwordTrim = password.trim();
  return passwordTrim.length >= PASSWORD_MIN_LENGTH;
}

function hasAtLeastOneCapitalLetter(password: string): boolean {
  return /[A-Z]+/.test(password);
}

function checkEqualsPassword(password: string, passwordConfirmation: string) {
  const passwordTrim = password.trim();
  const passwordConfirmationTrim = passwordConfirmation.trim();

  if (!isEmpty(passwordTrim)) {
    return passwordTrim === passwordConfirmationTrim;
  }
  return false;
}

export { haveMinLength, hasAtLeastOneCapitalLetter, checkEqualsPassword };
export const PASSWORD_MIN_LENGTH: number = 6;