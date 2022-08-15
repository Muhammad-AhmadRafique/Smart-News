import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React from "react";
import LoginScreen from "./src/screens/loginScreen";
import DetailScreen from "./src/screens/detailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";

import NewsFeedScreen from "./src/screens/newsFeedScreen";
import SearchNewsFeedScreen from "./src/screens/searchNewsFeedScreen";
import NewsNavStack from "./src/navigators/index"

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular, Oswald_700Bold });
  const [latoLoaded] = useLato({ Lato_400Regular, Lato_700Bold });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>

        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "HeadLines") {
                  iconName = focused ? "ios-home-sharp" : "ios-home-outline";
                } else if (route.name === "Feeds") {
                  iconName = focused ? "ios-search" : "search-outline";
                }

                return <Ionicons name={iconName} size={30} color={color} />;
              },
              tabBarShowLabel: false,
              tabBarLabelStyle: "30px",
              tabBarActiveTintColor: "black",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name="HeadLines"
              component={NewsNavStack}
              tabBarIcon
              options={{
                style: { justifyContent: "center", alignItems: "Center" },
              }}
            />
            <Tab.Screen name="Feeds" component={SearchNewsFeedScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
