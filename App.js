import RepositoryList from "./src/components/RepositoryList";
import AppBar from "./src/components/AppBar";

import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View>
      <AppBar />
      <RepositoryList />
      <StatusBar style="auto" />
    </View>
  )
};