export interface IQuestion {
    id: number,
    question: string,
    answers: IAnswers,
    correct_answer: string
}

export interface IAnswer {
    answer : {[key: string]: string};
}

export interface IAnswers {
    answer : {[key: string]: string}[];
}

export interface IAnsweredQuestion {
    question: IQuestion;
    correctAnswer: IAnswer;
    selectedAnswer: IAnswer;
}

export interface IResault {
    answers: IAnsweredQuestion[];
    score: number;
}

type PutQuestion = {
    type: "PUT_QUESTION",
    payload: IQuestion
}

type PutSelcetedAnswer = {
    type: "PUT_SELECTEDANSWER",
    payload: IAnswer
}


export type Action = PutQuestion | PutSelcetedAnswer;

