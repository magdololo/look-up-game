import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Cards from "./components/Cards";
import ChoiceDifficulty from "./components/ChoiceDifficulty";

function App() {
    const [startGame, setStartGame] = useState<boolean>(false)
    const [numberOfSymbols, setNumberOfSymbols] = React.useState<number>(3);
  return (
    <div className="App">
        <ChoiceDifficulty numberOfSymbols={numberOfSymbols} setNumberOfSymbols={setNumberOfSymbols}/>
        <Counter startGame={startGame} setStartGame={setStartGame} />
        <Cards startGame={startGame} setStartGame={setStartGame} numberOfSymbols={numberOfSymbols}/>
    </div>
  );
}

export default App;
