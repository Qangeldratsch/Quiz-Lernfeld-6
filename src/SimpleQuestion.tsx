import { useState } from 'react';
import './simpleQuestion.css'
import { Buttons } from "./Buttons";

export const SimpleQuestion = (props:any) => {

    const [nextQuestionsVisible, setNextQuestionsVisible] = useState(false);
    const [checked, setChecked] = useState(
        new Array(props.answers.length).fill(false)
    );

    const resetStates = () => {
        setChecked(new Array(props.answers.length).fill(false));

        // remove all answer classes
        Array.from(document.getElementsByClassName("answer--correct")).map((element: any) => {
            element.classList.remove("answer--correct");
        });
        Array.from(document.getElementsByClassName("answer--wrong")).map((element: any) => {
            element.classList.remove("answer--wrong");
        });
        Array.from(document.getElementsByClassName("answer--correct-correct")).map((element: any) => {
            element.classList.remove("answer--correct-correct");
        });
    }

    const handleOnChange = (index: number) => {
        const updatedChecked = checked.map((item, i) =>
            i === index ? !item : item
        );

        setChecked(updatedChecked);
    }

    let answers;

    const checkAnswers = () => {
        Array.from(document.getElementsByClassName("answer--input")).map((answer: any, id: number) => {
            // check selected answers
            if (answer.checked) {
                if (props.answers[answer.id].value) {
                    // @ts-ignore
                    document.getElementById("answer-" + id)
                        .classList.add("answer--correct");
                    if (!nextQuestionsVisible) {
                        props.setPoints(((prevState: number) => prevState + 1));
                    }
                } else {
                    // @ts-ignore
                    document.getElementById("answer-" + id)
                        .classList.add("answer--wrong");
                    if (!nextQuestionsVisible) {
                        props.setPoints(((prevState: number) => prevState - 1));
                    }
                }
            }
            // highlight the correct answers
            else {
                if (props.answers[answer.id].value) {
                    // @ts-ignore
                    document.getElementById("answer-" + id)
                        .classList.add("answer--correct-correct");
                }
            }
        });
    }

    if (props.answers instanceof Array) {
        answers = props.answers.map((answer: any, index: number) => {
                return (
                    <div
                        className="answer"
                        id={"answer-" + index.toString()}
                        onClick={() => handleOnChange(index)}
                    >
                            <input
                            id={index.toString()}
                            className="answer--input"
                            value="id"
                            type="checkbox"
                            checked={checked[index]}
                            onChange={() => handleOnChange(index)}
                        />
                        <label
                            onClick={() => handleOnChange(index)}
                        >
                            {answer.answer}
                        </label>
                    </div>
                );
            }
        );
    }

    return (
        <div className="question--wrapper">
            <p className="question--question">{props.question}</p>
            <div className="answers--wrapper">
                <div className="answers">
                    {answers}
                </div>
            </div>

            <Buttons
                checkAnswers={checkAnswers}
                resetStates={resetStates}
                setCurrentQuestion={props.setCurrentQuestion}
                nextQuestionsVisible={nextQuestionsVisible}
                setNextQuestionsVisible={setNextQuestionsVisible}
            />
        </div>
    );
}

