import {createTheme, ThemeProvider, Typography, useMediaQuery} from "@mui/material";
import React from "react";
const theme = createTheme();
theme.typography.h4 = {
    fontSize: '1rem',
    letterSpacing: '0.05em',
    margin: '3em 1em 0 1em',
    color: 'gray',
    textAlign: 'center',
    '@media (min-width:800px)': {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
}

const InfoAboutGame = () =>{
    const mobile = useMediaQuery('(max-width: 800px)');
    return(
        <>
            <ThemeProvider theme={theme}>
                {mobile ? <Typography variant='h4'> Kliknij prawidłowy symbol na dolnej karcie!</Typography>
                        : <Typography variant='h4'> Kliknij prawidłowy symbol na karcie z lewej strony!</Typography>
                }
            </ThemeProvider>
        </>
    )
}

export default InfoAboutGame;