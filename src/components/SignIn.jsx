import { StyleSheet, TextInput, View, Pressable } from "react-native";
import { useFormik } from "formik";

import Text from "./styledComponents/Text";
import theme from "../theme";

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
});

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
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
          style={styles.textInput}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={theme.colors.mainBackground}
          value={formik.values.password}
          secureTextEntry
          onChangeText={formik.handleChange("password")}
        />
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
