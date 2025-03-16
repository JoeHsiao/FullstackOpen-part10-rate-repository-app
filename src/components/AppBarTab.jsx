import { Text, Pressable } from "react-native";

const AppBarTab = ({ style }) => {
  return (
    <Pressable>
      <Text
        style={{
          color: style.textColor,
          paddingBottom: style.paddingBottom,
        }}
      >
        Repositories
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
