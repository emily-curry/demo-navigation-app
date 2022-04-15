import {
  getHeaderTitle,
  Header,
  HeaderBackButton,
} from "@react-navigation/elements";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * NAV: A header component that can be passed directly to the screenOptions of any navigator.
 */
export const SharedHeader: React.FC<NativeStackHeaderProps> = (props) => {
  const insets = useSafeAreaInsets();
  const isModal =
    props.options.presentation === undefined ||
    props.options.presentation === "card"
      ? false
      : true;
  const headerStatusBarHeight = React.useMemo(() => {
    if (Platform.OS !== "ios") return insets.top;
    return !isModal ? insets.top : 0;
  }, [insets.top]);

  return (
    <Header
      modal={isModal}
      // Background props
      headerStatusBarHeight={headerStatusBarHeight}
      headerBackground={props.options.headerBackground}
      // Title props
      title={getHeaderTitle(props.options, "")}
      headerTitleAlign={props.options.headerLargeTitle ? "left" : "center"}
      headerTitleStyle={{ fontSize: props.options.headerLargeTitle ? 36 : 20 }}
      // Right Props
      headerRight={(opts) =>
        props.options.headerRight?.({
          canGoBack: !!props.back,
          tintColor: opts.tintColor,
        })
      }
      // Left Props
      headerLeftLabelVisible={props.options.headerBackTitleVisible}
      headerLeft={(opts) => {
        if (props.options.headerLeft) {
          return props.options.headerLeft({
            canGoBack: !!props.back,
            tintColor: opts.tintColor,
            label: opts.labelVisible
              ? props.options.headerBackTitle
              : undefined,
          });
        }
        if (!props.back) return null;
        return (
          <HeaderBackButton
            onPress={props.navigation.goBack}
            style={{ justifyContent: "center", alignItems: "center" }}
            backImage={() => {
              return (
                <Image
                  source={require("../assets/images/1-navigate_before.png")}
                  style={{ width: 20, height: 44 }}
                />
              );
            }}
          />
        );
      }}
    />
  );
};
