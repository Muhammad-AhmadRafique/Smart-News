import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
// import styled from "styled-components/native";

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

// export const LoginButton = styled(Button)`
//   color: ${(props) => props.theme.backgroundColor};
// `;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
