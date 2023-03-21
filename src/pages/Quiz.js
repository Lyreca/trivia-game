import { useState } from 'react';

const Quiz = (props) => {
    const [quizNumber, setQuizNumber] = useState(0);


    return (
        <div>
            <h2>Question {quizNumber+1}</h2>
        </div>
    )

}


export default Quiz;