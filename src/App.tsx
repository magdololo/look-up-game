import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Cards from "./components/Cards";

function App() {
    const [time, setTime] = useState<number>(0);
    const [startGame, setStartGame] = useState<boolean>(false)
  return (
    <div className="App">
        <Counter time={time} setTime={setTime} startGame={startGame} setStartGame={setStartGame} />
        <Cards setTime={setTime} startGame={startGame} setStartGame={setStartGame}/>
    </div>
  );
}

export default App;
