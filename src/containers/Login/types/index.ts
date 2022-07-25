
export type LoginTypes = {
  email: string;
  password: string;
}

export type ResLoginType = {
  authToken: string;
}

export type ResCreateUserType = {
  id: string;
  email:string;
  fullName: string;
  authToken: string;
}