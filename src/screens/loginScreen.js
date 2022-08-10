import React, { useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../components/spacer.component";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/logo.png")}
          style={{
            height: 100,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Image>
        <Spacer position="top" size="large" />
        <Text style={styles.title}>Smart News</Text>
      </View>
      <Spacer position="top" size="large" />
      <Spacer position="top" size="large" />
      <Spacer position="top" size="large" />

      <TextInput
        label="Email"
        value={email}
        underlineColor="#DEDEDE"
        activeUnderlineColor="#5f9ea0"
        style={{ height: 55 }}
        onChangeText={(text) => setPassword(email)}
      />
      <Spacer position="top" size="large" />
      <TextInput
        label="Password"
        value={password}
        underlineColor="#DDDDDD"
        activeUnderlineColor="#5f9ea0"
        secureTextEntry={true}
        style={{ height: 55 }}
        onChangeText={(text) => setPassword(text)}
      />
      <Spacer position="top" size="large" />

      <Button
        style={{ height: 50, justifyContent: "center" }}
        labelStyle={{
          color: "white",
          fontFamily: "Lato_700Bold",
        }}
        color="#5f9ea0"
        textColor="#FFFFFF"
        backgroundColor="#C6DAF7"
        mode="contained"
        onPress={() => {
          if (email === "" && password === "") {
            Alert.alert("Error", "please enter valid credentials");
          }
        }}
      >
        SIGN IN
      </Button>
    </View>
  );
}

export default LoginScreen;

const TomatoButton = styled.Button`
  color: tomato;
  border-color: tomato;
`;

const Title = styled(Text)`
  color: green;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    marginTop: 100,
    margin: 20,
  },
  btn: {
    color: "#DDDDDD",
  },
  title: {
    color: "#333333",
    fontFamily: "Lato_700Bold",
    fontSize: 20,
  },
});
