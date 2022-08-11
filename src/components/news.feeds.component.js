import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "./spacer.component";
import Moment from "moment";

const Heading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.lato_bold};
  font-size: 17;
`;
const SubHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: 13;
  color: ${(props) => props.theme.colors.text.disabled};
`;

function NewsFeedItem({ item }) {
  const getDateStr = (str) => {
    Moment.locale("en");
    var localDateStr = Moment.utc(str).local().format("YYYY-MM-DDTHH:mm:ss");
    var result = Moment(localDateStr).fromNow();
    return result;
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.urlToImage }}
        style={styles.imageContainer}
        defaultSource={require("../../assets/logo2.png")}
      ></Image>
      <View style={styles.labelContainer}>
        <Heading numberOfLines={3}>{item.title}</Heading>
        <Spacer position="bottom" size="small" />
        <SubHeading>{getDateStr(item.publishedAt)}</SubHeading>
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
    alignItems: "center",
  },
  imageContainer: {
    marginLeft: 20,
    width: 80,
    height: 80,
    borderRadius: 12,
    borderColor: "#111111",
  },
  labelContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 15,
    marginRight: 15,
  },
});
