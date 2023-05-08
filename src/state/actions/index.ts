import { Dispatch } from "redux";
import { IQuestion } from "./interfaces";
import { PUT_QUESTION } from "./actionTypes";

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