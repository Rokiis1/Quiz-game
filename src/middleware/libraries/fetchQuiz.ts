import { Difficulty } from "../../config/Difficulty";
import { Question } from "../../interfaces/Question";
import { shuffleArray } from "../../utils/shuffleArray";
import { BASE_URL } from "../api/quizApi";

export const fetchQuiz = async (amount: number, difficulty: Difficulty) => {
  const response = `${BASE_URL}/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(response)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
