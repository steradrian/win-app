import { useMutation } from "@tanstack/react-query";
import { SignInInput, SignInResponse } from "../types/signInTypes";
import { SIGN_IN_MUTATION } from "../mutations/signInMutation.ts/signInMutation";
import apolloClient from "../apollo-client/apolloClient";

const useSignIn = () => {
  return useMutation<SignInResponse, Error, SignInInput>({
    mutationFn: async (input: SignInInput): Promise<SignInResponse> => {
      const { data } = await apolloClient.mutate({
        mutation: SIGN_IN_MUTATION,
        variables: { input },
      });
      return data.signIn;
    },
  });
};

export default useSignIn;
