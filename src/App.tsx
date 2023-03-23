import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Cards from "./components/Cards";
import ChoiceDifficulty from "./components/ChoiceDifficulty";
import InfoAboutGame from "./components/InfoAboutGame";
import GameControls from "./components/GameControls";

import {useMediaQuery} from "@mui/material";
import CountingDown from "./components/CountingDown";
import {scrollTo} from "./scrollTo";


function App() {
    const [startGame, setStartGame] = useState<boolean>(false)
    const [activeStartButton, setActiveStartButton] = useState<boolean>(false)
    const [numberOfSymbols, setNumberOfSymbols] = React.useState<number>(3);
    const [resetTime, setResetTime] = useState<boolean>(false)
    const [endGame, setEndGame] = useState<boolean>(false);
    const [clickReset, setClickReset] = useState<boolean>(false)
    const mobile = useMediaQuery('(max-width: 800px')
    const restartTimer = () =>{
        setResetTime(prevState => !prevState)
    }
   useEffect(()=>{
       if(activeStartButton && mobile){
           setEndGame(false)
           scrollTo({id: 'scrolling'})
       }
   },[activeStartButton])
    useEffect(()=>{
        if(activeStartButton){
            setClickReset(false)
        }
    },[activeStartButton])


  return (
      <div>
        <div id={'app'}>
            <InfoAboutGame/>
            <ChoiceDifficulty numberOfSymbols={numberOfSymbols} setNumberOfSymbols={setNumberOfSymbols}/>
            <GameControls startGame={startGame} restartTimer={restartTimer} setStart={setActiveStartButton} setEndGame={setEndGame} setClickReset={setClickReset}/>
        </div>
        <div id={'scrolling'} className={'scrolling'}>
            <div >
                <CountingDown setStartGame={setStartGame} activeStartButton={activeStartButton}/>
            </div>
            <div>
                <Counter startGame={startGame} resetTime={resetTime} endGame={endGame} clickReset={clickReset}/>
            </div>
            <Cards startGame={startGame} setStartGame={setStartGame} numberOfSymbols={numberOfSymbols} endGame={endGame} setEndGame={setEndGame} setStart={setActiveStartButton}/>
        </div>
     </div>
  );
}

export default App;
