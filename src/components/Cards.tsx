import Card from "./Card";
import {generate} from "dobble";
import React, {useEffect, useState} from "react";

interface CardsProps {
    setTime:  React.Dispatch<React.SetStateAction<number>>,
    startGame: boolean,
    setStartGame: (startGame: boolean) => void
}
const Cards = ({setTime, startGame, setStartGame}: CardsProps)=> {

    const [cardsTable, setCardsTable] = useState<Array<Array<number>>>([])
    const [rightCard, setRightCard] = useState<Array<number>>([])
    const [leftCard, setLeftCard] = useState<Array<number> | null>([])
    const [clickedIcon, setClickedIcon] = useState<{iconId: number } | null>(null)


    useEffect(() => {
        let interval: NodeJS.Timer | undefined = undefined;
        if (startGame) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else if (!startGame) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [startGame]);

    useEffect(()=>{
        if(!startGame){
            const generatedTable = generate(3)
            console.log(generatedTable)
            const randomIndex = Math.floor(Math.random() * generatedTable.length)
            setRightCard(generatedTable[randomIndex])
            generatedTable.splice(randomIndex, 1)
            setCardsTable(generatedTable)
        }
    },[startGame])

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
            }else {
                setStartGame(false)
                setLeftCard(null)
        }
    },[clickedIcon])



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