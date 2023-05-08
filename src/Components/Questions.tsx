import React from "react";
import { Field, reduxForm } from "redux-form";

import { IQuestion, IAnswer } from "../state/actions/interfaces";

const Questions: React.FC<{questions: IQuestion[], form: any}> = (props) => {
    
    const ali = {"ali": "2", "badr": "1"}

    const answerRenderer = (answers:IAnswer ) => {
        return Object.entries(answers).map(([key, value]) => {
            if(value !== null){ 
                return (
                    <div className="form-check" key={key}>
                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" />{value}
                        <label className="form-check-label" htmlFor="radio1"></label>
                    </div>
                );
            }
        });

    } 
    answerRenderer(props.questions[0].answers)
    const questionRenderer = (questions: IQuestion[]) => {
        let num : number = 0;
        return questions.map((question, j) => {
            return ( 
                <div className="card" key={question.id} style={{display: `${num == j? "block":"none"}`}}>
                    <div className="card-body " >
                        <p className="card-text">{question.question}</p>

                        {Object.entries(question.answers).map(([key, value]) => {
                            if(value !== null){ 
                                return (
                                    <div className="form-check" key={key}>
                                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" />{value}
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

export default reduxForm({form: "form"})(Questions);