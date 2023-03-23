import React from "react";
import {GameButtons, StyledButton} from "../styles/GameControls.components";

interface GameControlsProps {
    startGame: boolean;
    restartTimer: () => void;
    setStart: (activeStartButton: boolean) => void;
    setEndGame: (endGame: boolean) => void;
    setClickReset: (clickReset: boolean) => void;

}
const GameControls = ({startGame, restartTimer, setStart, setEndGame, setClickReset}: GameControlsProps) => {
    const handleClickStartButton = ()=>{
        setStart(true)
        restartTimer()

    }
    const handleClickResetButton = () => {
        if(startGame){
            setStart(false)
            setEndGame(true)
            setClickReset(true)
        }else if (!startGame){
            restartTimer()
            setEndGame(false)
        }
    }

    return (
        <>
            <GameButtons >
                <StyledButton  variant={startGame ? "outlined" :"contained"} disabled={startGame && true} onClick={() => handleClickStartButton()}>Start</StyledButton>
                <StyledButton  variant={!startGame ? "outlined" :"contained"} onClick={() => handleClickResetButton()}>Reset</StyledButton>
            </GameButtons>
        </>
    )
}

export default GameControls;

//className={animation ? "left-position" : ""}
//className={animation ? "right-position" : ""}