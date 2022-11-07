import { Question } from "../interfaces/Question";

export const TOTAL_QUESTIONS = 10;

export type QuestionState = Question & { answers: string[] };
