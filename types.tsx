/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  LinkFeatureTab: NavigatorScreenParams<LinkFeatureStackParamList> | undefined;
  TabTwo: NavigatorScreenParams<Tab2StackParamList> | undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type LinkFeatureStackParamList = {
  LinkDefault: undefined;
  LinkModal: undefined;
  LinkPage: { id: number; message: string };
};

export type LinkFeatureScreenProps<
  Screen extends keyof LinkFeatureStackParamList
> = CompositeScreenProps<
  NativeStackScreenProps<LinkFeatureStackParamList, Screen>,
  RootTabScreenProps<keyof RootTabParamList>
>;

export type Tab2StackParamList = {
  Tab2Default: undefined;
  Tab2Other: undefined;
};

export type Tab2ScreenProps<Screen extends keyof Tab2StackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<Tab2StackParamList, Screen>,
    RootTabScreenProps<keyof RootTabParamList>
  >;
