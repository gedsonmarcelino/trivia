import {Container} from "@/components/ui/Container";
import {Text} from "@/components/ui/Text";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
  },
  title: {
    marginTop: 94,
    marginBottom: 26
  },
  input: {
    marginBottom: 20
  }
});

export default function Home() {
  return (
    <Container style={styles.container}>
      <Text type="title" style={styles.title}>Home...</Text>
    </Container>
  );
}