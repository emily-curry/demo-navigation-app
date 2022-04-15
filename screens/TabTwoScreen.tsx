import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { Tab2ScreenProps, Tab2StackParamList } from "../types";

export default function TabTwoScreen() {
  const navigation =
    useNavigation<Tab2ScreenProps<keyof Tab2StackParamList>["navigation"]>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push("Tab2Other")}>
        <Text style={styles.title}>Push another route</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
