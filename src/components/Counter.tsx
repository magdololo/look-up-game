 import React, {useEffect, useState} from "react";
import {StyledButton, Timer} from "../styles/Counter.components";

interface CounterProps {
    startGame: boolean;
    setStartGame: (startGame: boolean) => void;
}

const Counter = ({startGame, setStartGame}: CounterProps)=>{
    const [time, setTime] = useState<number>(0);
    useEffect(() => {
        let interval: NodeJS.Timer | undefined = undefined;
        if (startGame) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else if (!startGame) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [startGame]);
  const handleClickStartButton = ()=>{
      setStartGame(true)
      setTime(0)

  }
  const handleClickResetButton = () => {
      if(startGame){
          setStartGame(false)
          setTime(0)
      }else if (!startGame){
          setTime(0)
      }
  }
    return (
        <div>
            <Timer>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </Timer>
            <div className="buttons">
                <StyledButton variant={startGame ? "outlined" :"contained"} disabled={startGame && true} onClick={() => handleClickStartButton()}>Start</StyledButton>
                <StyledButton variant={!startGame ? "outlined" :"contained"} onClick={() => handleClickResetButton()}>Reset</StyledButton>
            </div>
        </div>
    );
};

export default Counter;