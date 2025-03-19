import { SIGN_IN } from "../graphql/mutations";
import { useApolloClient, useMutation } from "@apollo/client";
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutation, result] = useMutation(SIGN_IN)

  const signIn = async ({ username, password }) => {
    const result = await mutation({ variables: { credentials: { username, password } } })
    authStorage.setAccessToken(result.data.authenticate.accessToken)
    apolloClient.resetStore();
    return result
  };

  return [signIn, result]
}

export default useSignIn