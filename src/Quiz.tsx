import { SimpleQuestion } from './SimpleQuestion';
import { TextInputQuestion } from "./TextInputQuestion";
import simpleQuestions from './resources/simpleQuestions.json';
import textInputQuestions from './resources/textInputQuestions.json';
import './quiz.css'
import { useState } from "react";

export const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [points, setPoints] = useState(0);

    let allQuestions = new Array;

    if (simpleQuestions.simpleQuestions instanceof Array) {
        simpleQuestions.simpleQuestions.map((question: any, index: number) =>
            allQuestions.push(
                <SimpleQuestion
                    question={question.question}
                    answers={question.answers}
                    setCurrentQuestion={setCurrentQuestion}
                    setPoints={setPoints}
                    key={"simpleQuestions-" + index}
                />
            )
        );
    }

    if (textInputQuestions.textInputQuestions instanceof Array) {
        textInputQuestions.textInputQuestions.map((question: any, index: number) =>
            allQuestions.push(
                <TextInputQuestion
                    question={question.question}
                    answer={question.answer}
                    setCurrentQuestion={setCurrentQuestion}
                    setPoints={setPoints}
                    key={"textInputQuestion-" + index}
                />
            )
        );
    }

    return (
        <div className="quiz">
            <h1>Quiz Lernfeld 6.1</h1>
            <div className="stats">
                <div className="question-counter">
                    Frage {currentQuestion + 1} von {allQuestions.length}
                </div>
                <div className="points">
                    {points} Punkte
                </div>
            </div>
            <div className="questions">
                {allQuestions[currentQuestion]}
            </div>
        </div>
    );
}

