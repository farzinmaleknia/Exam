import React, {useState, useEffect} from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { IQuestion } from "../state/actions/interfaces";

import { IAnswer } from "../state/actions/interfaces";

interface IProps {
    questions: IQuestion[];
}

const Questions: React.FC<InjectedFormProps<IAnswer, IProps> & IProps> = (props) => {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [questionShow, setQuestionShow] = useState(props.questions[0]);
    const { handleSubmit } = props;

    const nextQuestion = () => {
        setQuestionNumber(questionNumber + 1)
        console.log(questionNumber);
        setQuestionShow(props.questions[questionNumber])
    };

    const questionRenderer = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="card" key={questionShow.id}>
                    <div className="card-body" >
                        <div className="d-flex justify-content-between">
                            <span className="card-text">{questionShow.question}</span>
                            <span className="card-text mx-2 h4">{questionNumber}</span>
                        </div>
                        {
                            Object.entries(questionShow.answers).map(([key, value]) => {
                                if(value !== null){ 
                                    return (
                                        <div className="form-check" key={key}>
                                            <Field component="input" type="radio" className="form-check-input" name={key} value={value}/>{value}
                                            <label className="form-check-label" htmlFor="radio1"></label>
                                        </div>
                                    );
                                }
                            })
                        }
                        <button className="btn btn-success mt-3" type="submit" >Submit</button>
                    </div>
                </div>
            </form>
        )
    }

    return (
        <div className="m-5 px-5">
            {questionRenderer()}
        </div>
    );
};

export default reduxForm<IAnswer, IProps>({form: "form"})(Questions);
