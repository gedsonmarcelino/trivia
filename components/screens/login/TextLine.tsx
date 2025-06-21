import {Text, View} from "react-native";
import {stylesTextLine} from "./styles";

export function TextLine() {
  return (
    <View style={stylesTextLine.container}>
      <View style={stylesTextLine.line} />
      <Text style={stylesTextLine.text}>OR CONTINUE WITH</Text>
    </View>
  )
}