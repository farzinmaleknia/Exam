import { IResault, Action } from "../actions/interfaces";
import { PUT_ANSWER, PUT_SCORE } from "../actions/actionTypes";

export const resaultReducer = (state: IResault = { score: 0, answers: [] }, action: Action) => {
  switch (action.type) {
      case PUT_ANSWER:
      console.log(action.payload)    
      return [action.payload];
    case PUT_SCORE:
      return [state.score + 1];
    default:
      return state;
  }
};
