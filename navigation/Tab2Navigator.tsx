import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SharedHeader } from "../components/SharedHeader";
import TabTwoScreen from "../screens/TabTwoScreen";
import { Tab2StackParamList } from "../types";

const Stack = createNativeStackNavigator<Tab2StackParamList>();

export function Tab2Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{ header: (opts) => <SharedHeader {...opts} /> }}
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
