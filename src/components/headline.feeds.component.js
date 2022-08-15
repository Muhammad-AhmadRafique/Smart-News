import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";
import {
  CellHeading,
  CellSubHeading,
} from "../infrastructure/theme/global.styles";
import { Spacer } from "./spacer.component";
import Moment from "moment";

function HeadlineFeedsComponent({ item }) {
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
        defaultSource={require("../../assets/news-placeholder.png")}
      ></Image>
      <Spacer position="bottom" size="large" />
      <View style={styles.labelContainer}>
        <CellHeading numberOfLines={2}>{item.title}</CellHeading>
        <Spacer position="bottom" size="medium" />
        <CellSubHeading>{getDateStr(item.publishedAt)}</CellSubHeading>
        <Spacer position="bottom" size="small" />
        <CellSubHeading numberOfLines={2}>{item.author}</CellSubHeading>
      </View>
    </View>
  );
}

export default HeadlineFeedsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: 220,
  },
  imageContainer: {
    marginLeft: 0,
    width: 250,
    height: 120,
    maxWidth: 220,
    borderRadius: 16,
    resizeMode: "stretch",
  },
  labelContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 0,
    marginRight: 0,
    justifyContent: "flex-start",
  },
});
