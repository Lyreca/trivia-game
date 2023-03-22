import { useEffect, useState } from 'react';
import { shuffle } from './App';
import { useCookies } from 'react-cookie'

const Quiz = (props) => {
    const [quizNumber, setQuizNumber] = useState(0);
    const [quizScore, setQuizScore] = useState(0);
    const [quizAnswer, setQuizAnswer] = useState('');
    const [answerPool, setAnswerPool] = useState([]);
    const [cookies, setCookie] = useCookies(['highScore']);

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
        // Win condition
        else {
            // setQuizNumber(quizNumber+1);
            if (cookies.highScore === undefined) {
                setCookie('highScore', { [props.category]: quizScore }, { path: '/' });
            }
            else {
                if (quizScore > cookies.highScore[props.category]) {
                    setCookie('highScore', { [props.category]: quizScore }, { path: '/' });
                }
            }
        }
        
    }, [quizNumber, props.questions, quizAnswer, quizScore, cookies, setCookie, props.category]);

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
                                <button key={"answerBox" + index} className='quiz-answer-button' type="submit" onClick={() => setQuizAnswer(answer)}>{answer}</button>
                            )
                        })}
                    </div>
                    <h3>Score: {quizScore}</h3>
                </div>
                : 
                <div className='App-final'>
                    <h2>Final Score: {quizScore}</h2>
                    <h3>High Score: {(cookies.highScore === undefined) ? 0 : cookies.highScore[props.category]}</h3>
                    <button type='submit' className='quiz-answer-button' onClick={() => window.location.reload()}>Play Again</button>
                </div>
            }
        </div>
    )

}


export default Quiz;