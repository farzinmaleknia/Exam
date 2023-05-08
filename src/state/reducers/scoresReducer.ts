import { Action } from "../actions/interfaces";
import { PUT_SCORE } from "../actions/actionTypes";


export const scoresReducer = (state: number = 0, action: Action) => {
    switch(action.type) {
        case PUT_SCORE:
            return state + 1;
        default:
            return state;
    }
}