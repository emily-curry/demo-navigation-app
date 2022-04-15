import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { View, Text } from "../components/Themed";
import { LinkFeatureScreenProps } from "../types";

export const LinkPage = () => {
  const theme = useColorScheme();
  // NAV: Note that even the generic is type safe! `LinkPage` is a valid value, but `LinkPges` is not!
  const navigation =
    useNavigation<LinkFeatureScreenProps<"LinkPage">["navigation"]>();
  const route = useRoute<LinkFeatureScreenProps<"LinkPage">["route"]>();

  const [nextId, setNextId] = React.useState(route.params.id + 1);
  const [message, setMessage] = React.useState(route.params.message);

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.text}>{`Current page id: ${route.params.id}`}</Text>
      <View style={styles.spacer} />

      <Text style={styles.text}>Next page id:</Text>
      <TextInput
        value={nextId.toString()}
        onChangeText={(v) => setNextId(parseFloat(v) || nextId)}
        keyboardType="numeric"
        style={{
          borderColor: "red",
          borderWidth: 1,
          width: 100,
          color: theme === "light" ? "#000" : "#fff",
        }}
      />
      <Text style={styles.text}>
        If greater than 100, we dynamically set the title style to be the large
        variant
      </Text>
      <View style={styles.spacer} />

      <Text style={styles.text}>Next page title:</Text>
      <TextInput
        value={message}
        onChangeText={setMessage}
        style={{
          borderColor: "red",
          borderWidth: 1,
          width: 100,
          color: theme === "light" ? "#000" : "#fff",
        }}
      />
      <View style={styles.spacer} />
      {/** Also note that navigation.navigate is type safe. We _cannot_ push a route with invalid or mising params. */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push("LinkPage", { id: nextId, message })}
      >
        <Text style={styles.text}>Go!</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <Text style={styles.text}>
        The back button takes you to the previous page, the tab bar will pop the
        stack to the top.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 20 },
  button: { padding: 10 },
  spacer: { marginVertical: 20 },
});
