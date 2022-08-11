import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "./spacer.component";

const Heading = styled(Text)`
  font-family: "Lato_700Bold";
  font-size: 20;
`;
const SubHeading = styled(Text)`
  font-family: "Lato_400Regular";
  font-size: 15;
  color: ${(props) => props.theme.colors.text.disabled};
`;

function NewsFeedItem(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo2.png")}
        style={styles.imageContainer}
      ></Image>
      <View style={styles.labelContainer}>
        <Heading>Candidate Biden called Saudi Arabia a 'Pariah'</Heading>
        <Spacer position="bottom" size="medium" />
        <SubHeading>4 hours ago</SubHeading>
      </View>
    </View>
  );
}

export default NewsFeedItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  imageContainer: {
    marginLeft: 20,
    width: 100,
    height: 100,
    borderRadius: 20,
    borderColor: "#111111",
  },
  labelContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 10,
  },
});
