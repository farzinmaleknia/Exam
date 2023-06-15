import { combineReducers } from "redux";
import { questionsReducer } from "./questionsReducer";
import { selectedAnswerReducer } from "./selectedAnswerReducer";
import { reducer as formReducer } from "redux-form";
import { answeredQuestionReducer } from "./answeredQuestionReducer";
import { scoreReducer } from "./scoreReducer";
import { PUT_SELECTEDANSWER } from "../actions/actionTypes";

export const reducers = combineReducers({
  questions: questionsReducer,
  selectedAnswer: selectedAnswerReducer,
  answeredQuestion: answeredQuestionReducer,
  score: scoreReducer,
  form: formReducer,
});

export type State = ReturnType<typeof reducers>;
