import { FontAwesome } from "@expo/vector-icons";
import {
  getHeaderTitle,
  Header,
  HeaderBackButton,
} from "@react-navigation/elements";
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from "@react-navigation/native-stack";
import React from "react";
import {
  Pressable,
  useColorScheme,
  useWindowDimensions,
  Image,
  Platform,
} from "react-native";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { SharedHeader } from "../components/SharedHeader";
import { LinkPage } from "../screens/LinkPageScreen";
import ModalScreen from "../screens/ModalScreen";
import TabOneScreen from "../screens/TabOneScreen";
import { LinkFeatureScreenProps, LinkFeatureStackParamList } from "../types";

const Stack = createNativeStackNavigator<LinkFeatureStackParamList>();

/**
 * NAV: This is an example navigator that demonstrates the behavior of linking between pages.
 */
export function LinkFeatureNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator
      screenOptions={{ header: (opts) => <SharedHeader {...opts} /> }}
    >
      <Stack.Screen
        name="LinkDefault"
        component={TabOneScreen}
        options={({ navigation }) => ({
          title: "Links",
          headerLargeTitle: true,
          headerRight: () => {
            return (
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={colorScheme === "light" ? "#000" : "#fff"}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            );
          },
        })}
      />
      <Stack.Screen
        name="LinkPage"
        component={LinkPage}
        options={(opts) => ({
          headerTitle: opts.route.params.message,
          headerLargeTitle: opts.route.params.id > 100,
        })}
      />
      <Stack.Group
        screenOptions={{ presentation: "modal", headerRight: undefined }}
      >
        <Stack.Screen
          name="LinkModal"
          component={ModalScreen}
          options={{ title: "Link Modal" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
