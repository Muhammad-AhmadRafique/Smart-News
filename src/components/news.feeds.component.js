import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "./spacer.component";
import Moment from "moment";
import {
  CellHeading,
  CellSubHeading,
} from "../infrastructure/theme/global.styles";

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
        defaultSource={require("../../assets/news-placeholder.png")}
      ></Image>
      <View style={styles.labelContainer}>
        <CellHeading numberOfLines={3}>{item.title}</CellHeading>
        <Spacer position="bottom" size="small" />
        <CellSubHeading>{getDateStr(item.publishedAt)}</CellSubHeading>
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
    alignItems: "flex-start",
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
