import { SIGN_IN } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

const useSignIn = () => {
  const [mutation, result] = useMutation(SIGN_IN)

  const signIn = async ({ username, password }) => {
    return await mutation({ variables: { credentials: { username, password } } })
  };

  return [signIn, result]
}

export default useSignIn