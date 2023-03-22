import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

interface ResultsProps {
    scope: string
}
const Results = ({scope}: ResultsProps) => {
    return(
        <>
            <Box>
                <Typography variant='h6'>Koniec gry!</Typography>
                <Typography variant='h6'>Twój wynik: {scope} </Typography>
            </Box>
        </>
    )
}
export default Results