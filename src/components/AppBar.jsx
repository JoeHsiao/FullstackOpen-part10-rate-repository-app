import { ScrollView, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.darkPrimary,
    flexDirection: "column",
    flexBasis: "10%",
  },
  tabsContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
    margin: 10,
  },
  tab: {
    text: {
      color: theme.colors.textPrimaryBright,
    },
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabsContainer}>
        <AppBarTab style={styles.tab} label="Repositories" linkTo="/" />
        <AppBarTab style={styles.tab} label="Sign in" linkTo="/signIn" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
