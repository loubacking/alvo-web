function isEmpty(str: string): boolean {
  return str.length === 0;
}

function haveMinLength(password: string): boolean {
  const passwordTrim = password.trim();
  return passwordTrim.length >= PASSWORD_MIN_LENGTH;
}

function isInitBigLetter(password: string): boolean {
  const passwordTrim = password.trim();
  if (!isEmpty(passwordTrim)) {
    return passwordTrim.charAt(0) == passwordTrim.charAt(0).toUpperCase();
  }
  return false;
}

function checkEqualsPassword(password: string, passwordConfirmation: string) {
  const passwordTrim = password.trim();
  const passwordConfirmationTrim = passwordConfirmation.trim();

  if (!isEmpty(passwordTrim)) {
    return passwordTrim === passwordConfirmationTrim;
  }
  return false;
}

export { haveMinLength, isInitBigLetter, checkEqualsPassword };
export const PASSWORD_MIN_LENGTH: number = 6;