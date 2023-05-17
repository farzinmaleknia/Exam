import { Action, IAnswer } from "../actions/interfaces";
import { PUT_SELECTEDANSWER } from "../actions/actionTypes";


export const selectedAnswerReducer = (state: IAnswer={answer: {"sdsa": "sdad"}}, action: Action) => {
    switch(action.type) {
        case PUT_SELECTEDANSWER:
            return action.payload;
        default:
            return state;
    }
}