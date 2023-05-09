import React from "react";
import {createTheme, ThemeProvider, Typography, useMediaQuery} from "@mui/material";
import {useTranslation} from "react-i18next";
const themeHeader = createTheme();

themeHeader.typography.h4 = {
    fontSize: '1rem',
    letterSpacing: '0.05em',
    textAlign: 'center',
    '@media (min-width:800px)': {
        fontSize: '1.2rem',
        margin: '0 1em',
    },
    [themeHeader.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    }
}

const InfoAboutGame = () =>{
    const {t} = useTranslation()
    const mobile = useMediaQuery('(max-width: 800px)');


    return(
        <>

            <ThemeProvider theme={themeHeader}>
            {mobile ? <Typography variant={'h4'}> {t("info_about_game_mobile")}</Typography>
                : <Typography variant={'h4'}> {t("info_about_game_desktop")}</Typography>
                }
            </ThemeProvider>
        </>
    )
}

export default InfoAboutGame;