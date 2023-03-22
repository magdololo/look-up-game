import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Cards from "./components/Cards";
import ChoiceDifficulty from "./components/ChoiceDifficulty";
import InfoAboutGame from "./components/InfoAboutGame";
import GameControls from "./components/GameControls";

import {useMediaQuery} from "@mui/material";
import CountingDown from "./components/CountingDown";


function App() {
    const [startGame, setStartGame] = useState<boolean>(false)
    const [activeStartButton, setActiveStartButton] = useState<boolean>(false)
    const [numberOfSymbols, setNumberOfSymbols] = React.useState<number>(3);
    const [resetTime, setResetTime] = useState<boolean>(false)
    const [animation, setAnimation] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
    const [endGame, setEndGame] = useState<boolean>(false);

    const mobile = useMediaQuery('(max-width: 800px')
    const restartTimer = () =>{
        setResetTime(prevState => !prevState)
    }
   useEffect(()=>{
       if(activeStartButton && mobile){
           setEndGame(false)
          // window.scrollTo(0, 250)
           setAnimation(true)

       } else {
           setAnimation(false)
       }

   },[activeStartButton])

   useEffect(()=>{
       let timeout: NodeJS.Timer | undefined = undefined;
       if (activeStartButton) {
           timeout = setTimeout(() => {
               setShow(true);
           }, 1000);
       } else if (!activeStartButton) {
           clearTimeout(timeout);
       }
       return () => clearTimeout(timeout);
   }, [activeStartButton])

console.log(activeStartButton)
  return (
     <div className={animation ? "top-position App" : "bottom-position App"}>
      {/*<div>*/}
        <div>
            <InfoAboutGame/>
            <ChoiceDifficulty numberOfSymbols={numberOfSymbols} setNumberOfSymbols={setNumberOfSymbols}/>
            <GameControls startGame={startGame} setStartGame={setStartGame} restartTimer={restartTimer} setStart={setActiveStartButton}/>
        </div>

        {show && <CountingDown setStartGame={setStartGame} activeStartButton={activeStartButton} setShow={setShow}/>}
        {<Counter startGame={startGame} resetTime={resetTime} endGame={endGame}/>}

        <Cards startGame={startGame} setStartGame={setStartGame} numberOfSymbols={numberOfSymbols} setAnimation={setAnimation} endGame={endGame} setEndGame={setEndGame} setStart={setActiveStartButton}/>

    </div>
  );
}

export default App;
