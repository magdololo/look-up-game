import React, {useContext, useEffect, useState} from "react";
import Card from "./Card";
import {generate} from "dobble";
import {createTheme, ThemeProvider, Typography} from "@mui/material";
import {CardsComponent} from "../../styles/Cards.components";
import {GameContext} from "./Game";
import {useTranslation} from "react-i18next";
import NumberOfRemainingCards from "./NumberOfRemainingCards";


const theme = createTheme();

theme.typography.h6 = {
    fontSize: '1.1rem',
    letterSpacing: '0.05em',
    marginTop: '0.5em',
    '@media (min-width:600px)': {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.8rem',
    },
}
const Cards = ()=> {
    const { t } = useTranslation();
    const {startGame, setStartGame, endGame, setEndGame, numberOfSymbols, setActiveStartButton} = useContext(GameContext)
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
                setEndGame(false)
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
            }else if (cardsTable.length === 0 && leftCard){
                setStartGame(false)
                setLeftCard(null)
            }else if(cardsTable.length === 0){
            setEndGame(true)
            setActiveStartButton(false)
        }
    },[clickedIcon, startGame])

    useEffect(()=>{
        if(endGame){
            if(cardsTable.length > 0 && leftCard){
                setLeftCard(null)
                setStartGame(false)
                setEndGame(false)
            }
        }
    }, [endGame])

    return (
        <>

            <ThemeProvider theme={theme}>
                {!endGame  && <Typography variant='h6' style={{textAlign: 'center'}}>{t("cards.cards_left_starts")} <NumberOfRemainingCards cardsNumber={cardsTable.length}/>{t("cards.cards_left_ends")}.</Typography>}
            </ThemeProvider>
            <CardsComponent>
                <Card iconSet={leftCard} setClickedIcon={setClickedIcon}/>
                <Card iconSet={rightCard} setClickedIcon={null} />
            </CardsComponent>
        </>
    )
}
export default Cards;