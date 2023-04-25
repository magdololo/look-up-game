import React, { useEffect, useCallback, useState} from 'react';
import {icons, coordinates} from "../../utils/TableWithIcon";
import {useMediaQuery} from "@mui/material";
interface CardProps {
    iconSet: Array<number> | null
    setClickedIcon: ((clickedIcon: {iconId: number}) => void) | null;
}



const Card = React.memo( ({iconSet, setClickedIcon}: CardProps) => {
    const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement>();
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
    const allocatedIcons: Array<{iconId: number, coordinateId: number}> = []
    const mobile = useMediaQuery('(max-width:850px)');
    const sizeMultiplier: number = mobile ? 0.6 : 1
    const drawIcons = (ctx: CanvasRenderingContext2D) => {

        let iconSize =  mobile ? 30 : 50;
        // Draw 3 icons
        if(!iconSet) return
        const coordinatesCopy = [...coordinates]
        iconSet.forEach(iconId => {
            const icon = icons.find(icon => icon.id === iconId)
            if(!icon) return
            let randomId = Math.floor((Math.random() * coordinatesCopy.length));
            const coordinate = coordinatesCopy[randomId]
            coordinatesCopy.splice(randomId, 1)
            allocatedIcons.push({iconId: icon.id, coordinateId: coordinate.id})
            const startX = coordinate?.x * sizeMultiplier
            const startY = coordinate?.y * sizeMultiplier ;
            let x = startX;
            let y = startY;
            const img = new Image();
            img.src = icon.path;
            if (x === undefined || y === undefined) return

            img.onload = (function(x,y){
                return function() {
                    iconSize = mobile ? Math.floor(Math.random()*(100 - 70 + 1)) + 30 : Math.floor(Math.random()*(100 - 50 + 1)) + 50
                    ctx.drawImage(img, x , y, iconSize , iconSize);
                };
            })(x,y);
        })
    }
    const clearCanvas = (ctx: CanvasRenderingContext2D)=>{
        if(canvasRef){
            ctx.clearRect(0, 0, canvasRef.width, canvasRef.height)
        }
    }
    useEffect(() => {
        if (!ctx)return
        clearCanvas(ctx)
        drawIcons(ctx)
    }, [drawIcons]);

    const handleCanvas = useCallback((node: HTMLCanvasElement) => {
        if(!node) return
        setCanvasRef(node);
        setCtx(node.getContext("2d")!!);
    }, []);

    const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>)=>{
        const rect = canvasRef?.getBoundingClientRect()
        const x = event.clientX - rect!.left
        const y = mobile ? event.clientY - rect!.y  : event.clientY - rect!.y
        const clickedIconCoordinate = coordinates.find(coordinate => (( x > coordinate.x * sizeMultiplier)  &&  x < ((mobile ? coordinate.x * sizeMultiplier + 60 :  coordinate.x + 100))) &&  ((mobile ? y > coordinate.y * sizeMultiplier : coordinate.y)  &&  y < (mobile ? coordinate.y * sizeMultiplier +  60 : coordinate.y + 100 )))
        if (clickedIconCoordinate) {
            const clickedIcon = allocatedIcons.find(icon => icon.coordinateId === clickedIconCoordinate.id)
            if(clickedIcon && setClickedIcon){
                let clickedIconId = clickedIcon.iconId
                setClickedIcon({iconId: clickedIconId})
            }
        }
    }

    return (
        <div style={{ margin: mobile ? "0 20px" : "0 50px"}}>
            <canvas ref={handleCanvas} width={mobile ? 300 : 500} height={mobile ? 300 : 500} style={{border: "1px solid blue", borderRadius: "50%"}} onClick={(event) => handleCanvasClick(event)}/>
        </div>
    );
});

export default Card;

