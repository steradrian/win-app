import { gql } from "@apollo/client";

export const GET_USER_QUERY = gql`
  query GetUser {
    user {
      ... on User {
        id
        email
      }
      ... on UserNotFoundError {
        user_id
      }
      ... on InvalidTokenError {
        message
      }
    }
  }
`;
