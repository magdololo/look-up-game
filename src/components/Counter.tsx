import React from "react";
import {StyledButton, Timer} from "../styles/Counter.components";

interface CounterProps {
    time: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    startGame: boolean,
    setStartGame: (startGame: boolean) => void



}

const Counter = ({time, setTime, startGame, setStartGame}: CounterProps)=>{

    return (
        <div>
            <Timer>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </Timer>
            <div className="buttons">
                <StyledButton variant={startGame ? "outlined" :"contained"} onClick={() => {setStartGame(true); setTime(0)}}>Start</StyledButton>
            </div>
        </div>
    );
};

export default Counter;