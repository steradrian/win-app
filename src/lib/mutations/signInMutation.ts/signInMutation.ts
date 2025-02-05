// src/mutations/signIn.ts

import { gql } from "@apollo/client";

export const SIGN_IN_MUTATION = gql`
  mutation SignIn($input: SignInInput) {
    signIn(input: $input) {
      ... on Token {
        accessToken
      }
      ... on InvalidEmailError {
        message
      }
      ... on InvalidPasswordError {
        message
      }
    }
  }
`;
