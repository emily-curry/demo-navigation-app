import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContextProvider } from "./hooks/useAuthContext";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthContextProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={"dark"} />
          <StatusBar />
        </SafeAreaProvider>
      </AuthContextProvider>
    );
  }
}
