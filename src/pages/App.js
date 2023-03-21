// import logo from '../assets/logo.svg';
import { useState } from 'react';
import Quiz from './Quiz';
import '../styles/App.css';

const App = () => {
  const [selectionHidden, setSelectionHidden] = useState(false);
  const [quizCategory, setQuizCategory] = useState('');

  const handleClick = (category) => {
    console.log(category);
    setQuizCategory(category);
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
        <div className='App-selection' hidden={selectionHidden} style={(!selectionHidden) ? {display: 'flex'} : {display: 'none'}}>
          <button className='animals' type="submit" onClick={() => handleClick("Animals")}>Animals</button>
          <button className='history' type="submit" onClick={() => handleClick("History")}>History</button>
          <button className='science' type="submit" onClick={() => handleClick("Science")}>Science</button>
          <button className='sports' type="submit" onClick={() => handleClick("Sports")}>Sports</button>
        </div>
        <Quiz category={quizCategory}/>
      </div>
    </div>
  );
}

export default App;
