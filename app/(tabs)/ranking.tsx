import {Container} from "@/components/ui/Container";
import {Text} from "@/components/ui/Text";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
  },
  logout: {
    alignSelf: 'flex-end'
  },
  title: {
    marginTop: 94,
    marginBottom: 26
  },

});

export default function Ranking() {
  return (
    <Container>
      <Text>Ranking...</Text>
    </Container>
  );
}