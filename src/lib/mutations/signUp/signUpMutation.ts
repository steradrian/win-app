// src/mutations/signUp.ts
import { gql } from "@apollo/client";

export const SIGN_UP_MUTATION = gql`
  mutation SignUp($input: SignUpInput) {
    signUp(input: $input) {
      ... on Token {
        accessToken
      }
      ... on InvalidEmailError {
        message
      }
      ... on InvalidPasswordError {
        message
      }
      ... on PasswordTooShortError {
        message
      }
      ... on PasswordMismatchError {
        message
      }
      ... on EmailAlreadyExistsError {
        message
      }
    }
  }
`;
