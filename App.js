import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import LoginScreen from "./src/screens/loginScreen";

import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import NewsFeedScreen from "./src/screens/newsFeedScreen";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular, Oswald_700Bold });
  const [latoLoaded] = useLato({ Lato_400Regular, Lato_700Bold });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NewsFeedScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
