import {SafeAreaView} from "react-native-safe-area-context";
import {ContainerProps} from "./types";

export function Container({
  children,
  ...props
}: ContainerProps) {
  return (
    <SafeAreaView {...props}>
      {children}
    </SafeAreaView>
  );
}