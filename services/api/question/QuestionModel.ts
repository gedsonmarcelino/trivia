
export interface QuestionModel {
  id: number;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  category: "Science";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
}