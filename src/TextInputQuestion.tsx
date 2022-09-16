import './textInputQuestion.css'
import {useState} from "react";
import {Buttons} from "./Buttons";

export const TextInputQuestion = (props:any) => {

    const [showAnswer, setShowAnswer] = useState(false);

    const checkAnswers = () => {
        setShowAnswer(true);
    }

    const resetStates = () => {
        setShowAnswer(false);
        const input = document.getElementById("answer-textinput--input");
        if (input != null) {
            // @ts-ignore
            input.value = "";
        }
    }

    const handleKeyDown = (event:any) => {
        if (event.key === 'Enter') {
            checkAnswers();
        }
    }

    return (
        <div className="question--wrapper">
            <p className="question--question">{props.question}</p>
            <div className="answers--wrapper">
                <div className="answer-textinput--wrapper">
                    <input
                        id="answer-textinput--input"
                        className="answer-textinput--input"
                        type="text"
                        placeholder="Antwort eingeben..."
                        onKeyDown={handleKeyDown}
                    />
                </div>
                {showAnswer &&
                    <div className="answer-textinput--answer">
                        <p>Antwort: </p>
                        {props.answer}
                    </div>
                }
            </div>

            <Buttons
                checkAnswers={checkAnswers}
                resetStates={resetStates}
                setCurrentQuestion={props.setCurrentQuestion}
            />

        </div>
    );
}

