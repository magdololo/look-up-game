import {useEffect, useState} from "react";
import {StyledButton} from "../styles/Counter.components";

interface CounterProps {
    setStartGame: (startGame: boolean) => void
}

const Counter = ({setStartGame}: CounterProps)=>{
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timer | undefined = undefined;
        if (running) {
             interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);


    return (
        <div className="stopwatch">
            <div className="numbers">
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div className="buttons">
                <StyledButton variant={running ? "outlined" :"contained"} onClick={() => {setRunning(true);setStartGame(true)}}>Start</StyledButton>
                <StyledButton variant={!running ? "outlined" :"contained"} onClick={() => setRunning(false)}>Stop</StyledButton>
                <StyledButton  onClick={() =>{ setTime(0); setRunning(false)}}>Reset</StyledButton>
            </div>
        </div>
    );
};

export default Counter;