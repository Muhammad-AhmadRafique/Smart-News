import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import LoginScreen from "./src/screens/loginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as firebase from "firebase";

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

const Tab = createBottomTabNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyDXuPTROKdN3OO8KrgrhEDaFn7sjuzjNzQ",
  authDomain: "smart-news-b0c9c.firebaseapp.com",
  projectId: "smart-news-b0c9c",
  storageBucket: "smart-news-b0c9c.appspot.com",
  messagingSenderId: "89492722434",
  appId: "1:89492722434:web:2337d514b0aec0cb2b281b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("", "")
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
              component={NewsFeedScreen}
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
