import { useRef, useEffect, useState } from "react"

function ReactivePlate({
    width = "50px",
    height = "50px",
    padding = "0px",
    margin = "0px",

    backgroundColor = "hsl(0, 0%, 100%)",

    borderRadius = "0px",
    borderWidth = "0px",
    borderStyle = "solid",
    borderColor = "black",

    relateiveMousePos = [0, 0],
    reactiveMult = 1

}) {
    const ref = useRef(null)
    const [center, setCenter] = useState([0, 0])


    useEffect(() => {
        const rect = ref.current.getBoundingClientRect()
        setCenter([rect.left + rect.width / 2, rect.top + rect.height / 2])
    }, [])

    const widthSize = parseInt(width)
    const reactiveRadius = widthSize * widthSize * reactiveMult
    function calcDeg(mousePos, centerPos) {
        if (mousePos[0] == 0 && mousePos[1] == 0) { return 0 }
        const vx = centerPos[0] - mousePos[0]
        const vy = centerPos[1] - mousePos[1]
        const vectorLenSq = vx * vx + vy * vy
        if (vectorLenSq <= reactiveRadius * reactiveMult) {
            const vectorLen = Math.sqrt(vectorLenSq)
            return ((widthSize * reactiveMult - vectorLen) / (widthSize * reactiveMult)) * 90
        }
        return 0
    }

    const plateStyle = {
        width: width,
        height: height,
        padding: padding,
        margin: margin,

        backgroundColor: backgroundColor,

        borderRadius: borderRadius,
        borderWidth: borderWidth,
        borderStyle: borderStyle,
        borderColor: borderColor,

        //      formula for perpendicular vector 
        // V = (center[0] - relateiveMousePos[0], center[1] - relateiveMousePos[1])
        // U = (-V[1], V[0]) for counterclockwise
        // U = (V[1], -V[0]) for clockwise

        //      formula for deg
        // V = (center[0] - relateiveMousePos[0], center[1] - relateiveMousePos[1])
        // Vlen = sqrt(V[0]^2 + V[1]^2)
        // if vLen > width:
        //  
        rotate: `${relateiveMousePos[1] - center[1]} ${center[0] - relateiveMousePos[0]} 0 ${calcDeg(relateiveMousePos, center)}deg`,
    }

    //console.log(plateStyle.rotate)
    //console.log(center)

    return <>
        <div style={plateStyle} ref={ref}></div>
    </>
}

export default ReactivePlate