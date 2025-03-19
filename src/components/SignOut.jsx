import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";

import Text from "./styledComponents/Text";

const SignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  authStorage.removeAccessToken();
  apolloClient.resetStore();

  useEffect(() => {
    navigate("/");
  }, []);

  return <Text>Redirecting...</Text>;
};

export default SignOut;
