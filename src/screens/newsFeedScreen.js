import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import styled from "styled-components";
import HeadlineFeedsComponent from "../components/headline.feeds.component";
import NewsFeedItem from "../components/news.feeds.component";
import Search from "../components/search.component";
import { Spacer } from "../components/spacer.component";
import { SafeArea } from "../components/utility/safe.area.component";
import { ApiUrls, apiUrls, AppConstants } from "../constants/app.constants";
import { colors } from "../infrastructure/theme/colors";
import {
  CellHeading,
  CellSubHeading,
  MediumHeading,
} from "../infrastructure/theme/global.styles";

const ImageContainer = styled(View)`
  height: 50%;
  /* position: "absolute"; */
`;
const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  /* bottom: 50px; */
  left: 50%;
  margin-left: -25px;
  margin-top: 50px;
`;

function NewsFeedScreen(props) {
  const [newsList, setNewsList] = useState([
    { id: 1, name: "abc" },
    { id: 2, name: "abcd" },
    { id: 3, name: "abcde" },
    { id: 4, name: "abcdef" },
  ]);
  const [page, setPage] = useState(1);
  return (
    <SafeArea>
      <ImageContainer>
        <ImageBackground
          source={{
            uri: "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0812%2Fr1047370_1296x729_16%2D9.jpg",
          }}
          style={{
            height: "100%",
            width: "100%",
          }}
          imageStyle={{
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                height: 40,
                width: 150,
                borderRadius: "20",
                left: 30,
              }}
            >
              <CellSubHeading
                style={{
                  textAlign: "center",
                  fontFamily: "Lato_700Bold",
                  fontSize: 15,
                }}
              >
                News of the day
              </CellSubHeading>
            </View>
            <CellHeading
              style={{
                color: "white",
                fontSize: 25,
                fontFamily: "Lato_700Bold",
                textAlign: "left",
                margin: 30,
                marginBottom: 50,
              }}
            >
              `V.I.P Immunization for the Powerful and Their Cronies Rattles
              South America`
            </CellHeading>
          </View>
        </ImageBackground>
      </ImageContainer>
      <MediumHeading style={styles.headline}>Breaking News</MediumHeading>
      <FlatList
        style={styles.listing}
        horizontal
        data={newsList}
        renderItem={({ item }) => (
          <Spacer position="right" size="veryLarge">
            <HeadlineFeedsComponent item={item} />
          </Spacer>
        )}
        onEndReachedThreshold={0.2}
        onEndReached={() => {
          setPage(page + 1);
        }}
      />
    </SafeArea>
  );
}

export default NewsFeedScreen;

const styles = StyleSheet.create({
  headline: {
    margin: 20,
  },
  listing: {
    marginLeft: 20,
  },
});
