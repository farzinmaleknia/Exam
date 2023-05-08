import { PUT_SCORE } from "./actionTypes";

export interface IAnswer {
    answers: {[key: string]: string}[],
}

export interface IQuestion {
    id: number,
    question: string,
    answers: IAnswer,
    correct_answer: string
}

export interface IAnswer {
    answers: {[key: string]: string}[],
}

interface PutQuestion {
    type: "PUT_QUESTION",
    payload: IQuestion
}

interface PutScore {
    type: "PUT_SCORE",
}

export type Action = PutQuestion | PutScore;

