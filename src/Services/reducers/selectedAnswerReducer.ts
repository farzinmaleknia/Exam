import { Action } from "../actions/interfaces";
import { PUT_SELECTEDANSWER } from "../actions/actionTypes";

export const selectedAnswerReducer = (state: string = "No", action: Action) => {
  switch (action.type) {
    case PUT_SELECTEDANSWER:
      return action.payload;
    default:
      return state;
  }
};
