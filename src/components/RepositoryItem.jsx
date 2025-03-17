import { View, StyleSheet, Image } from "react-native";
import NumberBlock from "./NumberBlock";
import Text from "./styledComponents/Text";

const styles = StyleSheet.create({
  columnContainer: {
    flexDirection: "column",
  },
  rowContainer: {
    flexDirection: "row",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View
      style={{
        ...styles.columnContainer,
        gap: 10,
        padding: 10,
        backgroundColor: "white",
      }}
    >
      <View style={{ ...styles.rowContainer, gap: 20 }}>
        <Image
          source={{ uri: item.ownerAvatarUrl }}
          style={{ width: 40, height: 40, borderRadius: 4 }}
        ></Image>
        <View
          style={{
            ...styles.columnContainer,
            gap: 5,
          }}
        >
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <Text toButton={true}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <NumberBlock value={item.stargazersCount} label="Stars" />
        <NumberBlock value={item.forksCount} label="Forks" />
        <NumberBlock value={item.reviewCount} label="Reviews" />
        <NumberBlock value={item.ratingAverage} label="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
