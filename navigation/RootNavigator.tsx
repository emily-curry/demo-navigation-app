import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedHeader } from "../components/SharedHeader";
import { View, Text } from "../components/Themed";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import { BottomTabNavigator } from "./BottomTabNavigator";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * NAV: The RootNavigator contains _only_ the BottomTabNavigator and each additional feature that exists outside of the tabs (e.g. Chat, Settings).
 */
export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ header: (opts) => <SharedHeader {...opts} /> }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{ title: "Root Modal" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
