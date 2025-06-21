import {Button} from "@/components/ui/Button";
import {Text} from "@/components/ui/Text";
import {View} from "react-native";
import {stylesTextLink} from "./styles";
import {TextLinkProps} from "./types";

export function TextLink({onPress}: TextLinkProps) {
  return (
    <View style={stylesTextLink.container}>
      <Text>{"Don't have any account?"} </Text>
      <Button.Root type="link" onPress={onPress}>
        <Button.Text type="link">Create account</Button.Text>
      </Button.Root>
    </View>
  )
}