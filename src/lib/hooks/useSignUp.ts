import { useMutation } from "@tanstack/react-query";
import { SIGN_UP_MUTATION } from "../mutations/signUp/signUpMutation";
import { SignUpInput, SignUpResponse } from "../types/signUpTypes";
import apolloClient from "../apollo-client/apolloClient";

const useSignUp = () => {
  return useMutation<SignUpResponse, Error, SignUpInput>({
    mutationFn: async (input: SignUpInput): Promise<SignUpResponse> => {
      const { data } = await apolloClient.mutate({
        mutation: SIGN_UP_MUTATION,
        variables: { input },
      });
      return data.signUp;
    },
  });
};

export default useSignUp;
