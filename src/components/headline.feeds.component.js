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
        // source={{ uri: item.urlToImage }}
        source={{
          uri: "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0812%2Fr1047370_1296x729_16%2D9.jpg",
        }}
        style={styles.imageContainer}
        defaultSource={require("../../assets/logo2.png")}
      ></Image>
      <View style={styles.labelContainer}>
        {/* <CellHeading numberOfLines={3}>{item.title}</CellHeading>
        <Spacer position="bottom" size="small" />
        <CellSubHeading>{getDateStr(item.publishedAt)}</CellSubHeading> */}
        <Spacer position="bottom" size="large" />
        <CellHeading numberOfLines={2}>
          Candidate Biden Called Saudi Arabia a 'Pariah'
        </CellHeading>
        <Spacer position="bottom" size="small" />
        <CellSubHeading>4 Hours ago</CellSubHeading>
        <CellSubHeading>By David E.Sanger</CellSubHeading>
      </View>
    </View>
  );
}

export default HeadlineFeedsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "left",
    alignItems: "left",
    maxWidth: 220,
  },
  imageContainer: {
    marginLeft: 0,
    width: 250,
    height: 140,
    maxWidth: 220,
    borderRadius: 16,
    resizeMode: "stretch",
  },
  labelContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 15,
    marginRight: 15,
  },
});
