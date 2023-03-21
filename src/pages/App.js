// import logo from '../assets/logo.svg';
import '../styles/App.css';

const App = () => {


  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trivia Game</h1>
      </header>
      <div className='App-body'>
        <button className='animals' type="submit">Animals</button>
        <button className='history' type="submit">History</button>
        <button className='science' type="submit">Science</button>
        <button className='sports' type="submit">Sports</button>
      </div>
    </div>
  );
}

export default App;
