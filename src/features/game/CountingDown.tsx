import {useContext, useEffect, useState} from "react";
import { useMediaQuery} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import {Number} from "../../styles/CountingDown.component";
import {GameContext} from "./Game";





const CountingDown =()=>{

    const {setStartGame, activeStartButton} = useContext(GameContext)
    const [number, setNumber] = useState<number>(6);
    const [show, setShow] = useState<boolean>(false);
    const mobile = useMediaQuery('(max-width: 800px)')

    let timeout: NodeJS.Timeout | undefined = undefined;
    useEffect(()=>{
        if(activeStartButton){
            timeout = setTimeout(() => {
                setShow(true)
            }, 1000);
        } else {
            clearTimeout(timeout)
        }
    },[activeStartButton])

    useEffect(() => {
        let interval: NodeJS.Timer | undefined = undefined;
        if(activeStartButton){
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
        return () => {
            clearInterval(interval);
        }
    }, [activeStartButton, number]);

    useEffect(()=>{
        setNumber(6)
    }, [activeStartButton])

    return(
        <>

            <Box sx={{ width: '100%', maxWidth: 500 , margin: mobile ? "0 auto" : "40px auto"}} >
                {show && <Number>{number}</Number>}
            </Box>
        </>
    )
}
export default CountingDown