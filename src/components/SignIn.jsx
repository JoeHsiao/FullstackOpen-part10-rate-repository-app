import { StyleSheet, TextInput, View, Pressable } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

import Text from "./styledComponents/Text";
import theme from "../theme";
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "white",
  },
  itemsContainer: {
    gap: 10,
    margin: 10,
  },
  textInput: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
  },
  textButtonContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    overflow: "hidden", // make borderRadius work in ios
    color: theme.colors.textPrimaryBright,
    alignItems: "center",
    padding: 10,
  },
  textError: {
    borderColor: theme.colors.error,
  },
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      console.log("username", username);
      console.log("password", password);
      const { data } = await signIn({ username, password });
      console.log("data", data);
    } catch (e) {
      console.log("error", e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.itemsContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor={theme.colors.mainBackground}
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          style={[
            styles.textInput,
            formik.touched.username &&
              formik.errors.username &&
              styles.textError,
          ]}
        />
        {formik.touched.username && formik.errors.username && (
          <Text color="error">{formik.errors.username}</Text>
        )}
        <TextInput
          placeholder="Password"
          placeholderTextColor={theme.colors.mainBackground}
          value={formik.values.password}
          secureTextEntry
          onChangeText={formik.handleChange("password")}
          style={[
            styles.textInput,
            formik.touched.password &&
              formik.errors.password &&
              styles.textError,
          ]}
        />
        {formik.touched.password && formik.errors.password && (
          <Text color="error">{formik.errors.password}</Text>
        )}
        <View style={styles.textButtonContainer}>
          <Pressable onPress={formik.handleSubmit}>
            <Text color="textPrimaryBright">Sigin in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
