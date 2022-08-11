import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ActivityIndicator, Text, MD2Colors } from "react-native-paper";
import { Spacer } from "../components/spacer.component";

function NewsFeedScreen(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [newsList, setNewsList] = useState([]);

  const apiKey = "60452f97691747c58b9d9153e47feae3";
  const getHeadlines = () => {
    //newsapi.org/v2/top-headlines?country=us&apiKey=60452f97691747c58b9d9153e47feae3
    setIsLoading(true);
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;
    https: return fetch(url)
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
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator animating={true} color="#5282BD" />
      ) : (
        <FlatList
          data={newsList}
          renderItem={({ item }) => (
            <Spacer>
              <View>
                <Text>{item.title}</Text>
              </View>
            </Spacer>
          )}
        />
      )}
    </View>
  );
}

export default NewsFeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
