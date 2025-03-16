import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.darkPrimary,
    flexDirection: "row",
    alignItems: "flex-end",
    flexBasis: "10%",
  },
  tab: {
    text: {
      color: theme.colors.textPrimaryDark,
      paddingBottom: 10,
      flexGrow: 0,
    },
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab style={styles.tab} />
    </View>
  );
};

export default AppBar;
