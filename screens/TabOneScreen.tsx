import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { LinkFeatureScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: LinkFeatureScreenProps<"LinkDefault">) {
  const ref = useRef<ScrollView | null>(null);
  useScrollToTop(ref);
  return (
    <ScrollView ref={ref} contentContainerStyle={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Modal")}
        style={styles.button}
      >
        <Text style={styles.title}>Open Root Modal</Text>
        <Text style={styles.subtitle}>
          This modal is outside of the current stack.
        </Text>
      </TouchableOpacity>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LinkModal")}
      >
        <Text style={styles.title}>Open Link Modal</Text>
        <Text style={styles.subtitle}>
          This modal is inside of the current stack.
        </Text>
        <Text style={styles.subtitle}>
          It will display in a card on iOS, and inside the current navigator
          (including tabs) on Android.
        </Text>
        <Text style={styles.subtitle}>
          If this is not desired, then the modal route should be moved to the
          root navigator.
        </Text>
      </TouchableOpacity>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity
        onPress={() =>
          navigation.push("LinkPage", { id: 1, message: "first!" })
        }
        style={styles.button}
      >
        <Text style={styles.title}>Open Page</Text>
        <Text style={styles.subtitle}>
          This is a page inside the current stack.
        </Text>
      </TouchableOpacity>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity
        onPress={() => {
          // NAV: Note that the compiler automatically identifies and enforces the route name I may pass to the first arg to `navigate`.
          // We cannot do cross-tab navigation without specifying a route that exists in a navigator shared navigator, and then specifying from there.
          navigation.navigate("TabTwo", { screen: "Tab2Other" });
        }}
        style={styles.button}
      >
        <Text style={styles.title}>Open Page in Another Tab</Text>
        <Text style={styles.subtitle}>
          This is a page inside the stack of a different tab.
        </Text>
      </TouchableOpacity>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.subtitle}>
        vvv Scroll down to demo tab button behavior. vvv
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>Now press the "Links" tab button</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
