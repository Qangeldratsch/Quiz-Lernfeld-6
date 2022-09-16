import './textInputQuestion.css'

export const Buttons = (props:any) => {

    return (
        <div className="button--wrapper">
            <button
                onClick={() => {props.checkAnswers()}}
            >
                Antwort überprüfen
            </button>
            <button
                onClick={
                    () => {
                        props.setCurrentQuestion(((prevState: number) => prevState + 1));
                        props.resetStates();
                    }
                }
            >
                Nächste Frage
            </button>
        </div>
    );
}

