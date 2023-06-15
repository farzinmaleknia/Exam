import { IQuestion, Action } from "../actions/interfaces";
import { PUT_QUESTION } from "../actions/actionTypes";

export const questionsReducer = (state: IQuestion[] = [], action: Action) => {
  switch (action.type) {
    case PUT_QUESTION:
      return [...state, action.payload];
    default:
      return state;
  }
};
