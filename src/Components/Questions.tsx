import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { IQuestion, IAnswer } from "../state/actions/interfaces";

import { IUser } from "../state/actions/interfaces";

interface IProps {
    questions: IQuestion[];
    score : number;
}

const Questions: React.FC<InjectedFormProps<IUser, IProps> & IProps> = (props) => {

    const questionRenderer = (questions: IQuestion[]) => {
        let num : number = 0;
        console.log(props);
        return questions.map((question, j) => {

            return ( 
                <div className="card" key={question.id} style={{display: `${num == j? "block":"none"}`}}>
                    <div className="card-body " >
                        <p className="card-text">{question.question}</p>

                        {Object.entries(question.answers).map(([key, value]) => {
                            if(value !== null){ 
                                return (
                                    <div className="form-check" key={key}>
                                        <Field component="input" type="radio" className="form-check-input" name={key} value={value} />{value}
                                        <label className="form-check-label" htmlFor="radio1"></label>
                                    </div>
                                );
                            }
                        })}

                        <button className="btn btn-success mt-3" type="submit">Submit</button>
                    </div>
                </div>
            );
        })
    }

    return (
        <form>
            {questionRenderer(props.questions)}
        </form>
    );
};

export default reduxForm<IUser, IProps>({form: "form"})(Questions);
