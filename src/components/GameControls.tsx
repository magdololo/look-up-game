
import React from "react";
import {GameButtons, StyledButton} from "../styles/GameControls.components";

interface GameControlsProps {
    startGame: boolean;
    setStartGame: (startGame: boolean) => void;
    restartTimer: () => void;
    setStart: (activeStartButton: boolean) => void;

}
const GameControls = ({startGame, setStartGame, restartTimer, setStart}: GameControlsProps) => {
    const handleClickStartButton = ()=>{
        setStart(true)
        restartTimer()

    }
    const handleClickResetButton = () => {
        if(startGame){
            setStartGame(false)
            //setStart(false)
            restartTimer()

        }else if (!startGame){
            restartTimer()
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