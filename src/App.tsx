import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Cards from "./components/Cards";
import ChoiceDifficulty from "./components/ChoiceDifficulty";
import InfoAboutGame from "./components/InfoAboutGame";
import GameControls from "./components/GameControls";

import {useMediaQuery} from "@mui/material";
import CountingDown from "./components/CountingDown";
import {scrollTo} from "./scrollTo";

export interface GameControls {
    startGame: boolean
    endGame: boolean
    setStartGame: (startGame: boolean) => void
    setEndGame: (endGame: boolean) => void
    numberOfSymbols: number
    setNumberOfSymbols: (numberOfSymbols: number) => void;
    activeStartButton: boolean
    setActiveStartButton: (activeStartButton: boolean) => void;
}

export const GameContext = createContext<GameControls>({
    startGame: false,
    endGame: false,
    setStartGame: () => {
    },
    setEndGame: () => {
    },
    numberOfSymbols: 3,
    setNumberOfSymbols: () => {
    },
    activeStartButton: false,
    setActiveStartButton: () => {
    }
})

function App() {
    const [startGame, setStartGame] = useState<boolean>(false)
    const [activeStartButton, setActiveStartButton] = useState<boolean>(false)
    const [numberOfSymbols, setNumberOfSymbols] = React.useState<number>(3);
    const [resetTime, setResetTime] = useState<boolean>(false)
    const [endGame, setEndGame] = useState<boolean>(false);
    const [clickReset, setClickReset] = useState<boolean>(false)
    const mobile = useMediaQuery('(max-width: 800px')
    const restartTimer = () => {
        setResetTime(prevState => !prevState)
    }
    useEffect(() => {
        if (activeStartButton && mobile) {
            setEndGame(false)
            scrollTo({id: 'scrolling'})
        }
    }, [activeStartButton])
    useEffect(() => {
        if (activeStartButton) {
            setClickReset(false)
        }
    }, [activeStartButton])


    return (
        <GameContext.Provider value={{
            startGame,
            setStartGame,
            endGame,
            setEndGame,
            numberOfSymbols,
            setNumberOfSymbols,
            activeStartButton,
            setActiveStartButton
        }}>
            <InfoAboutGame/>
            <ChoiceDifficulty/>
            <GameControls restartTimer={restartTimer} setClickReset={setClickReset}/>
            <div id={'scrolling'} className={'scrolling'}>
                <CountingDown/>
                <Counter resetTime={resetTime} clickReset={clickReset}/>
                <Cards/>
            </div>
        </GameContext.Provider>
    );
}

export default App;
