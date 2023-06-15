import { IAnsweredQuestion, Action } from "../actions/interfaces";
import { PUT_ANSWER } from "../actions/actionTypes";

export const answeredQuestionReducer = (
  state: IAnsweredQuestion[] = [],
  action: Action
) => {
  switch (action.type) {
    case PUT_ANSWER:
      return [...state, action.payload];
    default:
      return state;
  }
};
