import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";

export const MainHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.oswald_bold};
  font-size: 50;
`;

export const MediumHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.oswald_bold};
  font-size: 30;
`;

export const CellHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.lato_bold};
  font-size: 17;
`;
export const CellSubHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: 13;
  color: ${(props) => props.theme.colors.text.disabled};
`;
