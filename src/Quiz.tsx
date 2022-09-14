import { SimpleQuestion } from './SimpleQuestion';
import questions from './resources/questions.json';
import './quiz.css'
import {useState} from "react";

export const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    let questions_objects = new Array;
    if (questions.questions instanceof Array) {
        questions.questions.map((question: any) =>
                questions_objects.push(
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
                {questions_objects[currentQuestion]}
            </div>
        </div>
    );
}

