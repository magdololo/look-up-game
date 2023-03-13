import Card from "./Card";
import {generate} from "dobble";
import React, {useEffect, useState} from "react";

interface CardsProps {
    startGame: boolean
}
const Cards = ({startGame}: CardsProps)=> {
    const [cardsTable, setCardsTable] = useState<Array<Array<number>>>([])
    const [firstCard, setFirstCard] = useState<Array<number>>([])
    const [secondCard, setSecondCard] = useState<Array<number> | null>([])
    const [clickedIcon, setClickedIcon] = useState<number | null>(null)
    useEffect(()=>{
        const generatedTable = generate(3)
        const randomIndex = Math.floor(Math.random() * generatedTable.length)
        setFirstCard(generatedTable[randomIndex])
        generatedTable.splice(randomIndex, 1)
        setCardsTable(generatedTable)

    },[])
    console.log(cardsTable)
    useEffect(()=>{
        if(startGame){
            const randomIndex = Math.floor(Math.random() * cardsTable.length)
            setSecondCard(cardsTable[randomIndex])
            cardsTable.splice(randomIndex, 1)
            setCardsTable(cardsTable)

        }

    },[startGame])
    useEffect(()=>{
        console.log(firstCard)
    }, [firstCard])
    return (
        <>
            <div style={{width: "max-content", margin: "10em auto", textAlign: "center", display: "flex", }}>
                <Card iconSet={secondCard} setClickedIcon={setClickedIcon}/>
                <Card iconSet={firstCard} setClickedIcon={null} />
            </div>
        </>
    )
}
export default Cards;