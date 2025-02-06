export interface Token {
  accessToken: string;
}

export interface InvalidEmailError {
  message: string;
}

export interface InvalidPasswordError {
  message: string;
}

export interface PasswordTooShortError {
  message: string;
}

export interface PasswordMismatchError {
  message: string;
}

export interface EmailAlreadyExistsError {
  message: string;
}

export type SignUpResponse =
  | Token
  | InvalidEmailError
  | InvalidPasswordError
  | PasswordTooShortError
  | PasswordMismatchError
  | EmailAlreadyExistsError;

export interface SignUpInput {
  email: string;
  password: string;
  passwordConfirmation: string;
}
