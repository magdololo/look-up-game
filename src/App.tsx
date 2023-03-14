import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Cards from "./components/Cards";

function App() {

    const [startGame, setStartGame] = useState<boolean>(false)
    console.log("time")
  return (
    <div className="App">
        <Counter startGame={startGame} setStartGame={setStartGame} />
        <Cards startGame={startGame} setStartGame={setStartGame}/>
    </div>
  );
}

export default App;
