import { Dispatch } from "redux";
import { IAnswer, IQuestion } from "./interfaces";
import { PUT_QUESTION, PUT_SELECTEDANSWER } from "./actionTypes";

export const putQuestion = (question: IQuestion) => (dispatch: Dispatch) => {
    dispatch({
        type: PUT_QUESTION,
        payload: question
    })
};

export const putScore = () => (dispatch: Dispatch) => {
    dispatch({
        type: PUT_QUESTION,
    })
};

export const putSelcetedAnswer = (answer: IAnswer) => (dispatch: Dispatch) => {
    dispatch({
        type: PUT_SELECTEDANSWER,
        payload: answer
    })
};

