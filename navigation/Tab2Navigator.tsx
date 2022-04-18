import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SharedHeader } from "../components/SharedHeader";
import { useAuthContext } from "../hooks/useAuthContext";
import TabTwoScreen from "../screens/TabTwoScreen";
import { Tab2StackParamList } from "../types";
import { Text } from "../components/Themed";

const Stack = createNativeStackNavigator<Tab2StackParamList>();

export function Tab2Navigator() {
  const [_, setAuth] = useAuthContext();
  return (
    <Stack.Navigator
      screenOptions={{
        header: (opts) => <SharedHeader {...opts} />,
        headerRight: () => {
          return (
            <TouchableOpacity
              onPress={() => setAuth(false)}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Text style={{ fontSize: 20 }}>Logout</Text>
            </TouchableOpacity>
          );
        },
      }}
      initialRouteName="Tab2Default"
    >
      <Stack.Screen
        name="Tab2Default"
        component={TabTwoScreen}
        options={{ title: "Tab 2", headerLargeTitle: true }}
      />
      <Stack.Screen
        name="Tab2Other"
        component={TabTwoScreen}
        options={{ title: "Another Page" }}
      />
    </Stack.Navigator>
  );
}
