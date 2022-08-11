import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar, Text } from "react-native-paper";
import styled from "styled-components";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  padding-top: 0px;
`;

function Search(props) {
  const [keyword, setKeyword] = useState("");

  return (
    <SearchContainer>
      <Searchbar
        value={keyword}
        placeholder="Search Here..."
        onChangeText={(value) => {
          console.log(value);
          setKeyword(value);
        }}
      />
    </SearchContainer>
  );
}

export default Search;
