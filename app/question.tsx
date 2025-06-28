import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";
import {Text} from "@/components/ui/Text";
import {useQuestions} from "@/hooks/useQuestions";
import {useLocalSearchParams, useRouter} from "expo-router";
import {useEffect, useMemo} from "react";
import {Pressable, View} from "react-native";

export default function Question() {

  const router = useRouter()
  const {category} = useLocalSearchParams()

  const {
    current,
    total,
    data,
    correctAnswers,
    isLast,
    isPending,
    error,
    nextQuestion,
    checkAnswer
  } = useQuestions(category as string || 'general')

  const question = useMemo(() => {
    return data[current] || {}
  }, [data, current])

  const handleBack = () => {
    router.back()
  }

  const handleAnswer = (answer: string) => {
    checkAnswer(answer)
    nextQuestion()
  }

  const handleLastAnswer = () => {
    if (isLast) {
      const params = new URLSearchParams({
        category: category,
        total: total,
        correctAnswers: correctAnswers
      } as any)
      router.replace(`/result?${params}`)
    }
  }

  useEffect(() => {
    handleLastAnswer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLast])

  if (isPending) return <></>

  if (error) return <></>

  return (
    <Container>
      <Button.Root type="link" onPress={handleBack}>
        <Button.Icon type="back" />
      </Button.Root>
      <Text>Questions {current + 1}/{total}</Text>
      <Text>{category}</Text>

      <View>
        <Text>{question.question}</Text>
        {question.answers.map((answer) => {
          return (
            <Pressable key={answer} onPress={() => handleAnswer(answer)}>
              <Text key={answer}>{answer}</Text>
            </Pressable>
          )
        })}
      </View>

      <Button.Root type="primary" onPress={handleBack}>
        <Button.Text>Cancel</Button.Text>
      </Button.Root>
    </Container >
  );
}