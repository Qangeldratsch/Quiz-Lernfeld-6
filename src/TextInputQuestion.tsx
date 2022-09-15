import './textInputQuestion.css'
import {useState} from "react";

export const TextInputQuestion = (props:any) => {

    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="question--wrapper">
            <p className="question--question">{props.question}</p>
            <div className="answers--wrapper">
                <div className="answer-textinput--wrapper">
                    <input
                        id="answer-textinput--input"
                        className="answer-textinput--input"
                        type="text"
                    />
                </div>
                {showAnswer &&
                    <div className="answer-textinput--answer">
                        <p>Antwort: </p>
                        {props.answer}
                    </div>
                }
            </div>

            <button
                onClick={() => setShowAnswer(true)}
            >
                Antwort überprüfen
            </button>
            <button
                onClick={
                    () => {
                        props.setCurrentQuestion(((prevState: number) => prevState + 1));
                    }
                }
            >
                Nächste Frage
            </button>
        </div>
    );
}

