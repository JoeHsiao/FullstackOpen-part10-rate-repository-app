import { View, StyleSheet } from "react-native";
import Text from "./styledComponents/Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    flexGrow: 0,
  },
});

const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
};

const NumberBlock = ({ value, label }) => {
  const strValue = formatNumber(value);
  return (
    <View style={styles.container}>
      <Text style={styles.text} fontWeight="bold">
        {strValue}
      </Text>
      <Text stle={styles.text} color="textSecondary">
        {label}
      </Text>
    </View>
  );
};

export default NumberBlock;
