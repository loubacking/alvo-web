import { REGEX_REGULAR_NAME, REGEX_SPECIAL_CHARACTERS } from "../constants/constants"

function validationFullName(name:string): boolean {
  const nameTrim = name.trim()

  if(nameTrim.length == 0) {
    return false
  }

  if(nameTrim.match(REGEX_REGULAR_NAME)) {
    return false
  }

  if(nameTrim.match(REGEX_SPECIAL_CHARACTERS)){
    return false
  }

  return true
}

const validationEmail = () => {

}

export {validationFullName, validationEmail}