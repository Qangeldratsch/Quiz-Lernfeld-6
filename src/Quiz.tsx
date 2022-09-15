import { SimpleQuestion } from './SimpleQuestion';
import { TextInputQuestion } from "./TextInputQuestion";
import simpleQuestions from './resources/simpleQuestions.json';
import textInputQuestions from './resources/textInputQuestions.json';
import './quiz.css'
import { useState } from "react";

export const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    let allQuestions = new Array;

    if (textInputQuestions.textInputQuestions instanceof Array) {
        textInputQuestions.textInputQuestions.map((question: any) =>
            allQuestions.push(
                <TextInputQuestion
                    question={question.question}
                    answer={question.answer}
                    setCurrentQuestion={setCurrentQuestion}
                />
            )
        );
    }

    if (simpleQuestions.simpleQuestions instanceof Array) {
        simpleQuestions.simpleQuestions.map((question: any) =>
            allQuestions.push(
                <SimpleQuestion
                    question={question.question}
                    answers={question.answers}
                    setCurrentQuestion={setCurrentQuestion}
                />
            )
        );
    }


    return (
        <div className="quiz">
            <h1>Quiz Lernfeld 6.1</h1>
            <div className="questions">
                {allQuestions[currentQuestion]}
            </div>
        </div>
    );
}

