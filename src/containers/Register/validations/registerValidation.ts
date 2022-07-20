import { REGEX_SPECIAL_CHARACTERS, REGEX_VALIDATE_EMAIL } from "../constants/constants"


function isEmpty(str: string): boolean {
  return str.length == 0
}

function containsSpecialCharacters(str: string): boolean {
  return str.match(REGEX_SPECIAL_CHARACTERS) !== null
}

function isRegularEmail(email: string): boolean {
  console.log("aqui",email.match(REGEX_VALIDATE_EMAIL) !== null)
  return email.match(REGEX_VALIDATE_EMAIL) !== null
}

function validationFullName(name:string): boolean {
  const nameTrim = name.trim()

  if(isEmpty(nameTrim)) {
    return false
  } else if(containsSpecialCharacters(nameTrim)){
    return false
  } 

  return true
}

const validationEmail = (email:string) => {
  const emailTrim = email.trim()

  if(isEmpty(emailTrim)){
    return false
  }

  if(!isRegularEmail(emailTrim)) {
    return false
  }

  return true
}

export {validationFullName, validationEmail}