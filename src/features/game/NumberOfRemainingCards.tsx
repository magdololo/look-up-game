import {createTheme, ThemeProvider, Typography} from "@mui/material";
import {useContext} from "react";
import {ThemeContext} from "../../ThemeContextProvider";
interface NumberCardsProps {
    cardsNumber: number;
}
const theme1 = createTheme()

theme1.typography.body1 = {
    color: 'rgb(25, 118, 210)'
}
export default function NumberOfRemainingCards({cardsNumber}: NumberCardsProps){
    const {theme} = useContext(ThemeContext)
    theme1.typography.body1 = {
        color: theme === 'light' ? 'rgb(25, 118, 210)' : 'rgb(144, 202, 249)'
    }
    return(
        <>
            <ThemeProvider theme={theme1}>
                <Typography variant={'body1'}>{cardsNumber}</Typography>
            </ThemeProvider>
        </>
    )
}

//
//{{color: "rgb(25, 118, 210", fontSize: "1.5rem"}}