import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import {instance as axios} from "../apis/axios";
import { State } from "../state/reducers";
import { actionCreators } from "../state";
import Questions from "./Questions";
import { IAnswer } from "../state/actions/interfaces";


const App: React.FC = () => {

  const {questions} = useSelector((state: State) => state = state)
  const dispatch = useDispatch();
  const {putQuestion, putSelcetedAnswer} = bindActionCreators(actionCreators, dispatch);

  const fetchQuestions = async () => {
    if(questions.length < 5){
      const res = await axios.get("/v1/questions");

      res.data.map((question: any) => {
        putQuestion({
          id: question.id,
          question: question.question,
          answers: question.answers,
          correct_answer: question.correct_answer
        })
      })
    }
  };

  const onFormSubmit = (values: IAnswer) => {
    putSelcetedAnswer(values);
  };

  fetchQuestions();

  const questionRenderer = () => {
    if(questions.length > 5){
      return <Questions questions={questions} onSubmit={onFormSubmit}/>
    }
  }
  return (
    <div className="container">
      {questionRenderer()}
    </div>
  );
};

export default App;
