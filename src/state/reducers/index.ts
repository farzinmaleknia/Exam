import { combineReducers } from "redux";
import { questionsReducer } from "./questionsReducer";
import { scoresReducer } from "./scoresReducer";
import { reducer as formReducer } from "redux-form";


export const reducers = combineReducers({
    questions: questionsReducer,
    score: scoresReducer,
    form: formReducer
})

export type State = ReturnType<typeof reducers>;