import { ScrollView, View, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";
import { ME } from "../graphql/queries";

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
  const { data } = useQuery(ME);
  const user = data ? data.me : null;

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabsContainer}>
        <AppBarTab style={styles.tab} label="Repositories" linkTo="/" />
        {!user && (
          <AppBarTab style={styles.tab} label="Sign in" linkTo="/signIn" />
        )}
        {user && (
          <AppBarTab style={styles.tab} label="Sign out" linkTo="/signOut" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
