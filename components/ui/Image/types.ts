import {Images} from "@/assets/images";
import {type ImageProps as RNImageProps} from "react-native";

export type ImageProps = RNImageProps & {
  type: keyof typeof Images;
};