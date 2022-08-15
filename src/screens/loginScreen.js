import React, { useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { Spacer } from "../components/spacer.component";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validate = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const result = reg.test(text);
    console.log(text, result);
    setEmail(text);
    return result;
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Smart News</Text>
        <Spacer position="top" size="large" />
        <Image style={styles.logo} source={require("../../assets/logo2.png")} />
      </View>
      <View style={{ marginTop: 50 }}></View>
      <TextInput
        label="Email"
        value={email}
        maxLength={320}
        underlineColor="#DEDEDE"
        activeUnderlineColor="#5f9ea0"
        style={{ height: 50, fontFamily: "Lato_400Regular" }}
        onChangeText={(value) => setEmail(value)}
      />
      <Spacer position="top" size="large" />
      <TextInput
        label="Password"
        value={password}
        maxLength={20}
        underlineColor="#DDDDDD"
        activeUnderlineColor="#5f9ea0"
        secureTextEntry={!showPassword}
        style={{ height: 50, fontFamily: "Lato_400Regular" }}
        onChangeText={(value) => setPassword(value)}
        right={
          <TextInput.Icon
            name={showPassword ? "eye" : "eye-off"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Spacer position="top" size="large" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const { navigation } = props
          const result = validate(email);
          if (result === false) {
            Alert.alert("Error", "Please enter valid email");
          } else {
            console.log("validsssss screens");
            navigation.replace("NewsFeedtabs")
          }
        }}
      >
        <Text
          style={{ color: "#FFFFFF", fontFamily: "Lato_700Bold", fontSize: 15 }}
        >
          SIGN IN
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    marginTop: 100,
    margin: 20,
  },
  logo: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5f9ea0",
    padding: 10,
    color: "white",
    fontFamily: "Lato_700Bold",
    borderRadius: 4,
  },
  title: {
    color: "#333333",
    fontFamily: "Lato_700Bold",
    fontSize: 25,
  },
});
