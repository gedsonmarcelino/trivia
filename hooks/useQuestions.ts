import {QuestionApi} from "@/services/api/question/QuestionApi";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";

export const useQuestions = (category:string) => {

  const {isPending, data, error} = useQuery({
    queryKey: ['questions'],
    queryFn: () => QuestionApi.getBy(category),
    staleTime: 10000
  });

  const [current, setCurrent] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [isLast, setIsLast] = useState(false)

  const dataMapped = data || []

  const total = dataMapped.length || 0

  const nextQuestion = () => {
    if ( current + 1 < dataMapped.length ) {
      setCurrent(current + 1)
    } else if ( current + 1 >= dataMapped.length ){
      setIsLast(true)
    }
  }

  const checkAnswer = (answer: string) => {
    if (answer === dataMapped[current].correct_answer) {
      setCorrectAnswers(prev => prev + 1)
    }
  }

  return { 
    current,
    total,
    isLast,
    correctAnswers,
    isPending,
    data: dataMapped,
    error,
    nextQuestion,
    checkAnswer
  }
}