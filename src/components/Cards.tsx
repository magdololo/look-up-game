import Card from "./Card";
import {generate} from "dobble";
import React, {useEffect, useState} from "react";

interface CardsProps {
    startGame: boolean,
    setStartGame: (startGame: boolean) => void
}
const Cards = ({startGame, setStartGame}: CardsProps)=> {

    const [cardsTable, setCardsTable] = useState<Array<Array<number>>>([])
    const [rightCard, setRightCard] = useState<Array<number>>([])
    const [leftCard, setLeftCard] = useState<Array<number> | null>([])
    const [clickedIcon, setClickedIcon] = useState<{iconId: number } | null>(null)



    useEffect(()=>{
        if(!startGame){
            const generatedTable = generate(6)
            console.log(generatedTable)
            const randomIndex = Math.floor(Math.random() * generatedTable.length)
            setRightCard(generatedTable[randomIndex])
            generatedTable.splice(randomIndex, 1)
            setCardsTable(generatedTable)
            setLeftCard(null)
        }
    },[startGame])

    useEffect(()=>{
        if(startGame){
            console.log("second")
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
            console.log(cardsTable)
            setCardsTable(cardsTable)
            }else if (cardsTable.length === 0){
                setStartGame(false)
                setLeftCard(null)
        }
    },[clickedIcon])

console.log(leftCard)

    return (
        <>
            <div style={{width: "max-content", margin: "10em auto", textAlign: "center", display: "flex", }}>
                <Card iconSet={leftCard} setClickedIcon={setClickedIcon}/>
                <Card iconSet={rightCard} setClickedIcon={null} />
            </div>
        </>
    )
}
export default Cards;