import React, { useState, useEffect } from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators } from "../state";
import { State } from "../state/reducers";
import {
  IQuestion,
  IAnswer,
  IAnsweredQuestion,
  IResault,
} from "../state/actions/interfaces";

interface IProps {
  questions: IQuestion[];
}

const Questions: React.FC<InjectedFormProps<IAnswer, IProps> & IProps> = (
  props
) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionShow, setQuestionShow] = useState(props.questions[0]);
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const { putAnswer, putScore } = bindActionCreators(actionCreators, dispatch);
  const selectedAnswer: string = state.selectedAnswer;
  const answeredQuestion: IAnsweredQuestion[] = state.answeredQuestion;

  useEffect(() => {
    if (selectedAnswer !== "No") {
      putAnswer({
        question: questionShow.question,
        questionNumber: questionNumber ,
        correctAnswer: questionShow.correct_answer,
        selectedAnswer: selectedAnswer[0],
      })

      if (questionShow.correct_answer === selectedAnswer[0]) {
        putScore();
      }
    }


    setQuestionNumber(questionNumber + 1);
    setQuestionShow(props.questions[questionNumber]);
    
  }, [selectedAnswer]);


  const questionRenderer = () => {
  
    return (
      <form onSubmit={props.handleSubmit}>
        <div className="card" key={questionShow.id}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <span className="card-text bold-font">{questionShow.question}</span>
              <span className="card-text mx-2 h4">{questionNumber}</span>
            </div>
            {Object.entries(questionShow.answers).map(([key, value]) => {
              if (value !== null) {
                return (
                  <div className="form-check" key={key}>
                    <Field
                      component="input"
                      type="radio"
                      className="form-check-input"
                      name="answer"
                      id={key}
                      value={[key, value]}
                    />
                    {value}
                    <label className="form-check-label" htmlFor={key}></label>
                  </div>
                );
              } else {
                return null;
              }
            })}
            <div className="d-flex justify-content-end">
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  };

  return <div className="m-5 px-5">{questionRenderer()}</div>;
};

export default reduxForm<IAnswer, IProps>({ form: "questionForm" })(Questions);
