import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Pressable, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { RootTabParamList, RootTabScreenProps } from "../types";
import { LinkFeatureNavigator } from "./LinkFeatureNavigator";
import { Text } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

/**
 * NAV: The bottom tab navigator contains _only_ references to other navigators. Each tab gets its own navigator.
 */
export function BottomTabNavigator() {
  const colorScheme = useColorScheme()!;

  return (
    <BottomTab.Navigator
      initialRouteName="LinkFeatureTab"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme]?.tint,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="LinkFeatureTab"
        component={LinkFeatureNavigator}
        options={({ navigation }: RootTabScreenProps<"LinkFeatureTab">) => ({
          title: "Links",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
