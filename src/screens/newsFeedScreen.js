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
  /* bottom: 50px; */
  left: 50%;
  margin-left: -25px;
  margin-top: 50px;
`;

function NewsFeedScreen(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [newsList, setNewsList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  const getUrl = () => {
    if (searchKeyword === "") {
      const url =
        AppConstants.baseURL +
        ApiUrls.topHeadlines +
        "?country=us" +
        "&pageSize=100" +
        "&page=" +
        page +
        "&apiKey=" +
        AppConstants.apiKey;

      return url;
    } else {
      const url =
        AppConstants.baseURL +
        ApiUrls.topHeadlines +
        "?country=us" +
        "&pageSize=100" +
        "&page=" +
        page +
        "&q=" +
        searchKeyword +
        "&apiKey=" +
        AppConstants.apiKey;

      return url;
    }
  };

  const getHeadlines = () => {
    setIsLoading(true);
    console.log(getUrl());
    return fetch(getUrl())
      .then((response) => response.json())
      .then((json) => {
        console.log(json.articles);
        setIsLoading(false);

        let list = json.articles;
        let status = json["status"];

        if (status === "ok") {
          if (list === []) {
            setIsListEnd(true);
          } else {
            setIsListEnd(false);
            setNewsList([...newsList, ...list]);
          }
        } else {
          setIsListEnd(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (isListEnd === false) {
      getHeadlines();
    }
  }, [searchKeyword, page]);

  const applySearch = (keyword) => {
    reset();
    setSearchKeyword(keyword);
  };

  const reset = () => {
    setIsLoading(true);
    setNewsList([]);
    setPage(1);
    setIsListEnd(false);
  };

  return (
    <SafeArea>
      <TopContainer>
        <Heading>Discover</Heading>
        <SubHeading>News from all over the world</SubHeading>
      </TopContainer>
      <Search applySearch={applySearch} />
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
        // keyExtractor={(item) => item.publishedAt}
        onEndReachedThreshold={0.2}
        onEndReached={() => {
          setPage(page + 1);
        }}
      />
    </SafeArea>
  );
}

export default NewsFeedScreen;
