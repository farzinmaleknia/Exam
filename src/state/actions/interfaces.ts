export interface IQuestion {
    id: number,
    question: string,
    answers: IAnswers,
    correct_answer: string
}

export interface IAnswer {
    answer : string;
}

export interface IAnswersssss {
    answer : string[];
}
export interface IAnswers {
    answer : {[key: string]: string}[];
}

export interface IAnsweredQuestion {
    question: string;
    questionNumber: number;
    correctAnswer: string;
    selectedAnswer: string;
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

type PutAnswer = {
  type: "PUT_ANSWER";
  payload: IResault;
};

type PutScore = {
  type: "PUT_SCORE";
};


export type Action = PutQuestion | PutSelcetedAnswer | PutAnswer | PutScore;

