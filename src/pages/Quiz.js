import { useEffect, useState } from 'react';
import { shuffle } from './App';

const Quiz = (props) => {
    const [quizNumber, setQuizNumber] = useState(0);
    const [quizScore, setQuizScore] = useState(0);
    const [quizAnswer, setQuizAnswer] = useState('');
    const [answerPool, setAnswerPool] = useState([]);

    useEffect(() => {
        if(quizNumber < props.questions.length) {
            if (props.questions.length > 0) {
                let answerPool = [];
                answerPool.push(props.questions[quizNumber][1]);
                answerPool = shuffle(answerPool.concat(props.questions[quizNumber][2]));

                console.log(answerPool)
                setAnswerPool(answerPool);
            }

            if (quizAnswer.length > 0) {
                if (quizAnswer === props.questions[quizNumber][1]) {
                    // alert('Correct!')
                    setQuizScore(quizScore + 1);
                }
                else {
                    // alert('Incorrect!')
                }
                setQuizNumber(quizNumber + 1);
                setQuizAnswer('');
            }
        }
        else {
            setQuizNumber(quizNumber+1);
        }
        
    }, [quizNumber, props.questions, quizAnswer, quizScore]);

    return (
        <div>
            {
            (quizNumber < props.questions.length) ?
                <div className='App-questions'>
                    <h2>Question {quizNumber+1}</h2>
                    <h3>{props.questions[quizNumber][0]}</h3>
                    <div className='App-answers'>
                        {answerPool.map((answer, index) => {
                            return (
                                <button key={"answerBox" + index} className='quiz-answer' type="submit" onClick={() => setQuizAnswer(answer)}>{answer}</button>
                            )
                        })}
                    </div>
                    <h3>Score: {quizScore}</h3>
                </div>
                : 
                <div className='App-final'>
                    <h2>Final Score: {quizScore}</h2>
                </div>
            }
        </div>
    )

}


export default Quiz;