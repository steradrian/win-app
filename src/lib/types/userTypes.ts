export interface User {
  id: string;
  email: string;
}

export interface UserNotFoundError {
  user_id: string;
}

export interface InvalidTokenError {
  message: string;
}

export type UserResponse = User | UserNotFoundError | InvalidTokenError;

export interface GetUserResponse {
  user: UserResponse;
}
