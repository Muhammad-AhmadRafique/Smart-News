import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import styled from "styled-components";
import NewsFeedItem from "../components/news.feeds.component";
import Search from "../components/search.component";
import { Spacer } from "../components/spacer.component";
import { SafeArea } from "../components/utility/safe.area.component";
import { ApiUrls, apiUrls, AppConstants } from "../constants/app.constants";
import { colors } from "../infrastructure/theme/colors";

const TopContainer = styled(View)`
  margin: 30px;
  margin-top: 40px;
`;
const Heading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.oswald_bold};
  font-size: 50;
`;
const SubHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.lato_bold};
  font-size: 15;
  color: ${(props) => props.theme.colors.text.disabled};
`;
const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
  margin-top: -25px;
  margin-top: 50px;
`;

function NewsFeedScreen(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [newsList, setNewsList] = useState([]);

  const url =
    AppConstants.baseURL +
    ApiUrls.topHeadlines +
    "?country=us" +
    "&apiKey=" +
    AppConstants.apiKey;

  const getHeadlines = () => {
    setIsLoading(true);

    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.articles);
        setIsLoading(false);
        setNewsList(json.articles);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getHeadlines();
  }, []);

  return (
    <SafeArea>
      <TopContainer>
        <Heading>Discover</Heading>
        <SubHeading>News from all over the world</SubHeading>
      </TopContainer>
      <Search />
      <Spacer position="bottom" size="large"></Spacer>
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator
            animating={true}
            size={50}
            color={colors.brand.secondary}
          />
        </LoadingContainer>
      )}
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="veryLarge">
            <NewsFeedItem item={item} />
          </Spacer>
        )}
      />
    </SafeArea>
  );
}

export default NewsFeedScreen;
