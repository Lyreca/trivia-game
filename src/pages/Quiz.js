import { useEffect, useState } from 'react';
import { shuffle } from './App';
import { useCookies } from 'react-cookie'
import Fade from 'react-reveal/Fade'

const Quiz = (props) => {
    const [quizNumber, setQuizNumber] = useState(0);
    const [quizScore, setQuizScore] = useState(0);
    const [quizAnswer, setQuizAnswer] = useState('');
    const [quizResults, setQuizResults] = useState([]);
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
                let temp = [...quizResults];

                temp.push(quizAnswer);
                setQuizResults(temp);
                setQuizNumber(quizNumber + 1);
                setQuizAnswer('');
            }
        }
        // Win condition
        else {
            if (cookies.highScore === undefined) {
                setCookie('highScore', { [props.category]: quizScore }, { path: '/' });
            }
            else {
                let temp = {...cookies.highScore};
                if(!(props.category in temp)) {
                    temp[props.category] = quizScore;
                    setCookie('highScore', temp, { path: '/' });
                }
                else if (quizScore > temp[props.category]) {
                    temp[props.category] = quizScore;
                    setCookie('highScore', temp, { path: '/' });
                }
            }
        }
        
    }, [quizNumber, props.questions, quizAnswer, quizScore, quizResults, cookies, setCookie, props.category]);

    return (
        <div>
            {
            (quizNumber < props.questions.length) ?
                <div className='App-questions'>
                    <Fade>
                        <div className='App-question-box' key={"Question" + quizNumber}>
                            <h3>Question {quizNumber+1}</h3>
                            <h4>{props.questions[quizNumber][0]}</h4>
                            <div className='App-answers'>
                                {answerPool.map((answer, index) => {
                                    return (
                                        <button key={"answerBox" + index} className='quiz-answer-button' type="submit" onClick={() => setQuizAnswer(answer)}>{answer}</button>
                                    )
                                })}
                            </div>
                        </div>
                    </Fade>
                    <h3>Score: {quizScore}</h3>
                </div>
                : 
                <div className='App-question-box'>
                    <h2>Final Score: {quizScore}/{props.questions.length}</h2>
                    <h3>High Score: {(cookies.highScore === undefined) ? 0 : cookies.highScore[props.category]}</h3>
                    <button type='submit' className='quiz-answer-button' onClick={() => window.location.reload()}>Play Again</button>
                    <div className='App-results'>
                        <table>
                            <caption><strong>Overview</strong></caption>
                            <thead>
                                <tr>
                                    <th>&#10067;</th>
                                    <th>Question</th>
                                    <th>Correct Answer</th>
                                    <th>Your Answer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quizResults.map((result, index) => {
                                    return (
                                        <tr key={"result" + index}>
                                            
                                            <td>{(result === props.questions[index][1]) ? <p>&#9989;</p> : <p>&#10060;</p> }</td>
                                            <td>{props.questions[index][0]}</td>
                                            <td>{props.questions[index][1]}</td>
                                            <td>{result}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    )

}


export default Quiz;