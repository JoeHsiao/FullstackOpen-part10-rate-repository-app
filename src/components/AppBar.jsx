import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexDirection: "row",
    alignItems: "flex-end",
    flexBasis: "7%",
  },
  tab: {
    textColor: "#eeeeee",
    paddingBottom: "7%",
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
