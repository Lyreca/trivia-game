// import logo from '../assets/logo.svg';
import { useState } from 'react';
import Quiz from './Quiz';
import { AnimalQuestions, HistoryQuestions, ScienceQuestions, SportsQuestions, ChemistryQuestions, FootballQuestions } from '../assets/Questions';
import '../styles/App.css';

export const shuffle = (array) => {
  // Implementation of Fisher-Yates shuffle algorithm
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const App = () => {
  const [selectionHidden, setSelectionHidden] = useState(false);
  const [quizCategory, setQuizCategory] = useState('');
  const [quizQuestions, setQuizQuestions] = useState([]);

  const handleClick = (category) => {
    console.log(category);
    setQuizCategory(category);

    switch(category){
      case "Animals":
        setQuizQuestions(shuffle(AnimalQuestions));
        break;
      case "History":
        setQuizQuestions(shuffle(HistoryQuestions));
        break;
      case "Science":
        setQuizQuestions(shuffle(ScienceQuestions));
        break;
      case "Sports":
        setQuizQuestions(shuffle(SportsQuestions));
        break;
      case "Chemistry":
        setQuizQuestions(shuffle(ChemistryQuestions));
        break;
      case "Football":
        setQuizQuestions(shuffle(FootballQuestions));
        break;
      default:
        break;
    }
    toggleSelection();
  }



  function toggleSelection() {
    if (selectionHidden) {
      setSelectionHidden(false);
    } else {  
      setSelectionHidden(true);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{(quizCategory.length > 0 ? quizCategory + ' Trivia' : 'Trivia Game')}</h1>
      </header>

      <div className='App-body'>
        {(quizQuestions.length > 0) ? 
          <Quiz category={quizCategory} questions={quizQuestions}/> 
          :
          <div className='App-selection' hidden={selectionHidden} style={(!selectionHidden) ? {display: 'flex'} : {display: 'none'}}>
            <button className='animals' type="submit" onClick={() => handleClick("Animals")}>Animals &#128058;</button>
            <button className='history' type="submit" onClick={() => handleClick("History")}>History &#128511;</button>
            <button className='science' type="submit" onClick={() => handleClick("Science")}>Science &#128300;</button>
            <button className='sports' type="submit" onClick={() => handleClick("Sports")}>Sports &#127944;</button>
            <button className='chemistry' type="submit" onClick={() => handleClick("Chemistry")}>Chemistry</button>
            <button className='football' type="submit" onClick={() => handleClick("Football")}>Football &#127944;</button>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
