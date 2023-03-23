 import React, {useEffect, useState} from "react";
import {TimerNumbers} from "../styles/Counter.components";
 import {Typography} from "@mui/material";
 import Box from "@mui/material/Box";

interface CounterProps {
    startGame: boolean;
    resetTime: boolean;
    endGame: boolean;
    clickReset: boolean;


}

const Counter = ({startGame, endGame, resetTime, clickReset}: CounterProps)=>{
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

    useEffect(()=>{
        setTime(0)
    }, [resetTime])

    let scope: string = ''

        if(time > 10000){
            scope = (`${("0" + Math.floor((time / 60000) % 60)).slice(-2) + 'min'+ ' ' + ("0" + Math.floor((time / 1000) % 60)).slice(-2) + 'sek.' + ("0" + ((time / 10) % 100)).slice(-2) + 'ms'}`)
        } else if(time < 10000){
            scope = (`${("0" + Math.floor((time / 1000) % 60)).slice(-2) + 'sek' + ' ' + ("0" + ((time / 10) % 100)).slice(-2) + 'ms'}`)
        }

    return (
        <>
            {startGame ?
                <TimerNumbers>
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                </TimerNumbers>
                :
                (endGame && !clickReset) ?
                    <Box>
                        <Typography variant='h6'>Koniec gry!</Typography>
                        <Typography variant='h6'>Twój wynik: {scope} </Typography>
                    </Box>
                    :
                    !endGame && <></>

            }
        </>
    );
};

export default Counter;