import React, { useEffect, useCallback, useState} from 'react';
import {icons, coordinates} from "../TableWithIcon";

interface CardProps {
    iconSet: Array<number> | null
    setClickedIcon: ((clickedIcon: number | null) => void) | null;
}



const Card = React.memo( ({iconSet, setClickedIcon}: CardProps) => {
    const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement>();
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
    //const canvasRef = useRef<HTMLCanvasElement>(null);

    const allocatedIcons: Array<{iconId: number, coordinateId: number}> = []
    const drawIcons = (ctx: CanvasRenderingContext2D) => {

        let iconSize =  50;

        // Draw 6 icons
        if(!iconSet) return
        const coordinatesCopy = [...coordinates]
        iconSet.forEach(iconId => {

            const icon = icons.find(icon => icon.id === iconId)
            if(!icon) return
            let randomId = Math.floor((Math.random() * coordinatesCopy.length));

            const coordinate = coordinatesCopy[randomId]
                coordinatesCopy.splice(randomId, 1)
            console.log(icon.id)
            console.log(coordinate.id)
            allocatedIcons.push({iconId: icon.id, coordinateId: coordinate.id})
            const startX = coordinate?.x - (iconSize/2);
            const startY = coordinate?.y - (iconSize/2);
            let x = startX;
            let y = startY;
            const img = new Image();
            img.src = icon.path;

            if (x === undefined || y === undefined) return

            img.onload = (function(x,y){
                return function() {
                    iconSize = Math.floor(Math.random()*(100 - 50 + 1)) + 50

                    ctx.drawImage(img, x , y, iconSize , iconSize);
                };
            })(x,y);
        })
        console.log(allocatedIcons)
        // icons.forEach(icon => {
        //     console.log(icons)
        //     let randomId = Math.floor((Math.random() * coordinates.length));
        //     console.log(randomId)
        //     const coordinate = coordinates[randomId]
        //     console.log(coordinate)
        //     coordinates.splice(randomId, 1)
        //     //const coordinate = coordinates.find(coordinate=> coordinate.id === randomId)
        //     console.log(coordinates)
        //     const startX = coordinate?.x - (iconSize/2);
        //     const startY = coordinate?.y - (iconSize/2);
        //     let x = startX;
        //     let y = startY;
        //     const img = new Image();
        //     img.src = icon.path;
        //
        //     console.log(x)
        //     console.log(y)
        //     if (x === undefined || y === undefined) return
        //
        //     img.onload = (function(x,y){
        //         return function() {
        //             iconSize = Math.floor(Math.random()*(100 - 50 + 1)) + 50
        //             console.log(iconSize)
        //             ctx.drawImage(img, x , y, iconSize , iconSize);
        //         };
        //     })(x,y);
        //     // x += iconSize + spacing ;
        //     // if (x > startX!! + iconSize * 3 + spacing * 2) {
        //     //     x = startX;
        //     //     y += iconSize + spacing;
        //     // }
        //
        // });
    }
    useEffect(() => {

         //const canvas = canvasRef.current;
        // if(!canvas) return
        // const ctx = canvas.getContext('2d');
         if (!ctx)return

        drawIcons(ctx)


    }, [drawIcons]);

    const handleCanvas = useCallback((node: HTMLCanvasElement) => {
        if(!node) return
        setCanvasRef(node);
        setCtx(node.getContext("2d")!!);
    }, []);

    const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>)=>{
        console.log(event.clientX)
        const rect = canvasRef?.getBoundingClientRect()
        const x = event.clientX - rect!.left
        const y = event.clientY - rect!.top
        console.log(x, y)
        console.log(coordinates)
        const clickedIconCoordinate = coordinates.find(coordinate => (x > coordinate.x  &&  x < (coordinate.x + 100)) &&  (y > coordinate.y  &&  y < (coordinate.y + 100)))
        console.log(clickedIconCoordinate)

        if (clickedIconCoordinate) {
            const clickedIcon = allocatedIcons.find(icon => icon.coordinateId === clickedIconCoordinate.id)
            if(clickedIcon && setClickedIcon){
                let clickedIconId = clickedIcon.iconId
                setClickedIcon(clickedIconId)
            }


        }
    }

    return (

        <div style={{margin: "0 50px"}}>
            <canvas ref={handleCanvas} width={500} height={500} style={{border: "1px solid blue", borderRadius: "50%"}} onClick={(event) => handleCanvasClick(event)}/>
        </div>
    );
});

export default Card;

