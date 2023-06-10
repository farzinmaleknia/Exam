import React, {useState} from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import {instance as axios} from "../apis/axios";
import { actionCreators } from "../state";
import Questions from "./Questions";
import Header from "./Header";
import { State } from "../state/reducers";
import { IAnswer } from "../state/actions/interfaces";


const App: React.FC = () => {
  const [emptyAnswerNum, setEmptyAnswerNum] = useState(1);
  const state = useSelector((state: State) => state)
  const dispatch = useDispatch();
  const {putQuestion, putSelcetedAnswer} = bindActionCreators(actionCreators, dispatch);

  const fetchQuestions = async () => {
    if(state.questions.length < 5){
      const res = await axios.get("/v1/questions");

      res.data.map((question: any) => {
        return putQuestion({
          id: question.id,
          question: question.question,
          answers: question.answers,
          correct_answer: question.correct_answer
        })
      })
    }
  };

  const onFormSubmit = (values: IAnswer) => {
    if(values.answer != null){
      const answerArray: string[] = values.answer.split(',');
      putSelcetedAnswer(answerArray);
    } else {
      putSelcetedAnswer([`${emptyAnswerNum} blanc answer`]);
      setEmptyAnswerNum(emptyAnswerNum + 1)
    }
  };
  
  console.log(state);

  fetchQuestions();

  const questionRenderer = () => {
    if(state.questions.length > 5){
      return <Questions questions={state.questions} onSubmit={onFormSubmit}/>
    }
  }
  return (
    <div className="container">
      <Header />
      {questionRenderer()}
    </div>
  );
};

export default App;
