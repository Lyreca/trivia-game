// import logo from '../assets/logo.svg';
import { useState } from 'react';
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
        <h1>Trivia Game</h1>
      </header>
      <div className='App-body'>
        <div className='App-selection' hidden={selectionHidden} style={(!selectionHidden) ? {display: 'flex'} : {display: 'none'}}>
          <button className='animals' type="submit" onClick={() => handleClick("animals")}>Animals</button>
          <button className='history' type="submit" onClick={() => handleClick("history")}>History</button>
          <button className='science' type="submit" onClick={() => handleClick("science")}>Science</button>
          <button className='sports' type="submit" onClick={() => handleClick("sports")}>Sports</button>
        </div>
      </div>
    </div>
  );
}

export default App;
