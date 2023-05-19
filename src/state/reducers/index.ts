import { combineReducers } from "redux";
import { questionsReducer } from "./questionsReducer";
import { selectedAnswerReducer } from "./selectedAnswerReducer";
import { reducer as formReducer } from "redux-form";
import { resaultReducer } from "./resaultReducer";



export const reducers = combineReducers({
    questions: questionsReducer,
    selectedAnswer: selectedAnswerReducer,
    resault : resaultReducer,
    form: formReducer
})

export type State = ReturnType<typeof reducers>;