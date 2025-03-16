import { Pressable } from "react-native";
import { Text } from "react-native";

const AppBarTab = ({ style }) => {
  return (
    <Pressable>
      <Text style={style.text}>Repositories</Text>
    </Pressable>
  );
};

export default AppBarTab;
