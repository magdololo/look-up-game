import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Cards from "./components/Cards";

function App() {
    const [startGame, setStartGame] = useState<boolean>(false)
  return (
    <div className="App">
        <Counter setStartGame={setStartGame}/>
        <Cards startGame={startGame}/>
    </div>
  );
}

export default App;
