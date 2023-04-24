import React, {useContext} from "react";
import {GameButtons, StyledButton} from "../styles/GameControls.components";
import {GameContext} from "../App";

interface GameControlsProps {

    restartTimer: () => void;

    setClickReset: (clickReset: boolean) => void;

}
const GameControls = ({ restartTimer, setClickReset}: GameControlsProps) => {
    const {startGame, setActiveStartButton} = useContext(GameContext)
    const {setEndGame} = useContext(GameContext)
    const handleClickStartButton = ()=>{
        setActiveStartButton(true)
        restartTimer()

    }
    const handleClickResetButton = () => {
        if(startGame){
            setActiveStartButton(false)
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