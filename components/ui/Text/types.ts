import {type TextProps as RNTextProps} from "react-native";
import {styles} from "./styles";

export type TextProps = RNTextProps & {
  type?: keyof typeof styles;
};