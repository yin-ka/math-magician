import './App.css';
import MyCalculator from './components/Calculator';
import DisplayQuote from './components/displayQuote';

function App() {
  return (
    <div className="App">
      <h1>My Calculator</h1>
      <MyCalculator />
      <DisplayQuote />
    </div>
  );
}

export default App;
