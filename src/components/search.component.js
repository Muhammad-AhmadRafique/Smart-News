import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  padding-top: 0px;
`;

function Search({ applySearch }) {
  const [keyword, setKeyword] = useState("");

  return (
    <SearchContainer>
      <Searchbar
        value={keyword}
        placeholder="Search Here..."
        onSubmitEditing={() => {
          applySearch(keyword);
        }}
        onChangeText={(value) => {
          setKeyword(value);
          if (value === "") {
            applySearch(value);
          }
        }}
      />
    </SearchContainer>
  );
}

export default Search;
