import React, {useEffect, useState} from "react";
import Card from "./Card";
import {generate} from "dobble";
import {createTheme, ThemeProvider, Typography} from "@mui/material";
import {CardsComponent} from "../styles/Cards.components";

interface CardsProps {
    startGame: boolean,
    setStartGame: (startGame: boolean) => void
    numberOfSymbols: number
}
const theme = createTheme();
theme.typography.h4 = {
    fontSize: '1rem',
    letterSpacing: '0.05em',
    margin: '3em 1em 0 1em',
    color: 'gray',
    '@media (min-width:800px)': {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
}

theme.typography.h6 = {
    fontSize: '1.1rem',
    letterSpacing: '0.05em',
    marginTop: '1.5em',
    color: 'gray',
    '@media (min-width:600px)': {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.8rem',
    },
}
const Cards = ({startGame, setStartGame, numberOfSymbols}: CardsProps)=> {

    const [cardsTable, setCardsTable] = useState<Array<Array<number>>>([])
    const [rightCard, setRightCard] = useState<Array<number>>([])
    const [leftCard, setLeftCard] = useState<Array<number> | null>([])
    const [clickedIcon, setClickedIcon] = useState<{iconId: number } | null>(null)


    useEffect(()=>{
        if(!startGame){
            const generatedTable = generate(numberOfSymbols)
            const randomIndex = Math.floor(Math.random() * generatedTable.length)
            setRightCard(generatedTable[randomIndex])
            generatedTable.splice(randomIndex, 1)
            setCardsTable(generatedTable)
            setLeftCard(null)
        }
    },[startGame, numberOfSymbols])

    useEffect(()=>{
        if(startGame){
                const randomIndex = Math.floor(Math.random() * cardsTable.length)
                setLeftCard(cardsTable[randomIndex])
                cardsTable.splice(randomIndex, 1)
                setCardsTable(cardsTable)
            }
    },[startGame])

    useEffect(()=>{
        const correctIcon = rightCard.find(iconId=> iconId === clickedIcon?.iconId)
        if(correctIcon !== undefined && leftCard && cardsTable.length > 0){
            setRightCard(leftCard)
            const randomIndex = Math.floor(Math.random() * cardsTable.length)
            setLeftCard(cardsTable[randomIndex])
            cardsTable.splice(randomIndex, 1)
            setCardsTable(cardsTable)
            }else if (cardsTable.length === 0){
                setStartGame(false)
                setLeftCard(null)
        }
    },[clickedIcon])
console.log(clickedIcon)
    return (
        <>
            <ThemeProvider theme={theme}>
                <Typography variant='h4'> Kliknij prawidłowy symbol na karcie z lewej strony!</Typography>
                <Typography variant='h6'>Pozostało: <span style={{color: 'black'}}>{cardsTable.length}</span> kart.</Typography>
            </ThemeProvider>
            <CardsComponent>
                <Card iconSet={leftCard} setClickedIcon={setClickedIcon}/>
                <Card iconSet={rightCard} setClickedIcon={null} />
            </CardsComponent>
        </>
    )
}
export default Cards;