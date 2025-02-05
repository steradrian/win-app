export interface SignInInput {
  email: string;
  password: string;
}

export interface SignInToken {
  accessToken: string;
}

export interface UserNotFoundError {
  user_id: string;
}

export interface EmailNotConfirmedError {
  message: string;
}

export interface InvalidPasswordError {
  message: string;
}

export type SignInResponse =
  | SignInToken
  | UserNotFoundError
  | EmailNotConfirmedError
  | InvalidPasswordError;

export interface SignInError {
  message: string;
}
