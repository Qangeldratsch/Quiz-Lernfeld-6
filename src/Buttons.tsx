import './textInputQuestion.css'

export const Buttons = (props:any) => {

    return (
        <div className="button--wrapper">
            <button
                onClick={() => {
                    props.checkAnswers();
                    props.setNextQuestionsVisible(true);
                }}
            >
                Antwort überprüfen
            </button>
            {props.nextQuestionsVisible &&
                <button
                    onClick={
                        () => {
                            props.setCurrentQuestion(((prevState: number) => prevState + 1));
                            props.resetStates();
                            props.setNextQuestionsVisible(false);
                        }
                    }
                >
                    Nächste Frage
                </button>
            }
        </div>
    );
}

