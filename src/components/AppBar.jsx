import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.darkPrimary,
    flexDirection: "column-reverse",
    flexBasis: "10%",
  },
  tabsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    margin: 10,
  },
  tab: {
    text: {
      color: theme.colors.textPrimaryDark,
    },
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <AppBarTab style={styles.tab} label="Repositories" linkTo="/" />
        <AppBarTab style={styles.tab} label="Sign in" linkTo="/signIn" />
      </View>
    </View>
  );
};

export default AppBar;
