import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SharedHeader } from "../components/SharedHeader";
import SignInScreen from "../screens/SignInScreen";
import { AuthStackParamList } from "../types";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ header: (opts) => <SharedHeader {...opts} /> }}
    >
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: "Nav Demo Sign In" }}
      />
    </AuthStack.Navigator>
  );
};
