import { Dispatch } from "redux";
import { IAnswer, IAnsweredQuestion, IQuestion } from "./interfaces";
import { PUT_ANSWER, PUT_QUESTION, PUT_SCORE, PUT_SELECTEDANSWER } from "./actionTypes";

export const putQuestion = (question: IQuestion) => (dispatch: Dispatch) => {
    dispatch({
        type: PUT_QUESTION,
        payload: question
    })
};

export const putSelcetedAnswer = (answer: string) => (dispatch: Dispatch) => {
    dispatch({
        type: PUT_SELECTEDANSWER,
        payload: answer
    })
};

export const putAnswer = (answers: IAnsweredQuestion) => (dispatch: Dispatch) => {
    dispatch({
        type: PUT_ANSWER,
        payload: answers
    })
};

export const putScore = () => (dispatch: Dispatch) => {
    dispatch({
        type: PUT_SCORE,
    })
};



