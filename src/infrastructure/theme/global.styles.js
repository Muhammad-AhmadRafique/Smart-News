import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";

export const MainHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.oswald_bold};
  font-size: 50px;
`;

export const MediumHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.oswald_bold};
  font-size: 30px;
`;

export const CellHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.lato_bold};
  font-size: 17px;
`;
export const CellSubHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: 13px;
  color: ${(props) => props.theme.colors.text.disabled};
`;
