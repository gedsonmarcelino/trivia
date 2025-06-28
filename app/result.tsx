import {Container} from "@/components/ui/Container";
import {Text} from "@/components/ui/Text";
import {useLocalSearchParams} from "expo-router";

export default function Result() {

  const {category, correctAnswers, total} = useLocalSearchParams();

  return (
    <Container>
      <Text>Category: {category}</Text>
      <Text>Result:</Text>
      <Text>{correctAnswers}/{total}</Text>
    </Container>
  )
}