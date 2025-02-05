import { useQuery } from "@tanstack/react-query";
import { GET_USER_QUERY } from "../queries/getUser";
import { GetUserResponse } from "../types/userTypes";
import apolloClient from "../apollo-client/apolloClient";

const useGetUser = () => {
  return useQuery<GetUserResponse>({
    queryKey: ["getUser"],
    queryFn: async () => {
      const { data } = await apolloClient.query<GetUserResponse>({
        query: GET_USER_QUERY,
      });
      return data;
    },
  });
};

export default useGetUser;
