import { Pressable } from "react-native";
import { Link } from "react-router-native";

import Text from "./styledComponents/Text";

const AppBarTab = ({ style, label, linkTo }) => {
  return (
    <Pressable>
      <Link to={linkTo}>
        <Text style={style.text}>{label}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
