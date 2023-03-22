import {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";

interface CountingDownProps {
    activeStartButton: boolean;
    setStartGame: (startGame: boolean) => void;
    setShow: (show:boolean)=> void;
}
const CountingDown =({activeStartButton, setStartGame, setShow}: CountingDownProps)=>{
    const [number, setNumber] = useState<number>(5);
    useEffect(() => {
        let interval: NodeJS.Timer | undefined = undefined;
        if (activeStartButton) {
            interval = setInterval(() => {
                if(number > 1){
                    setNumber(prevTime => prevTime - 1);
                } else if (number <= 1){
                    setStartGame(true)
                    setShow(false)
                    clearInterval(interval);
                }
            }, 1000);
        } else if (!activeStartButton) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [activeStartButton, number]);

    useEffect(()=>{
        setNumber(5)
    }, [activeStartButton])
    return(
        <>
            <Box sx={{ width: '95%', maxWidth: 500 , margin:  "40px auto"}} className={"animatedCounting"}>
                <Typography variant={'h4'} gutterBottom>
                    {number}
                </Typography>
            </Box>
        </>
    )
}
export default CountingDown