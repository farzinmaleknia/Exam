import { combineReducers } from "redux";
import { questionsReducer } from "./questionsReducer";
import { selectedAnswerReducer } from "./selectedAnswerReducer";
import { reducer as formReducer } from "redux-form";



export const reducers = combineReducers({
    questions: questionsReducer,
    selectedAnswer: selectedAnswerReducer,
    form: formReducer
})

export type State = ReturnType<typeof reducers>;