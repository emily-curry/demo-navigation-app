import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { useAuthContext } from "../hooks/useAuthContext";

export default function SignInScreen() {
  const [_, setAuth] = useAuthContext();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You're not logged in!</Text>
      <TouchableOpacity onPress={() => setAuth(true)} style={styles.link}>
        <Text style={styles.linkText}>Click to authenticate!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
