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

    mousePos = [0, 0],
    reactiveMult = 1,
    animationTime = 0.3,
    zIndex = "-2",

    dimensions = null

}) {
    const ref = useRef(null)
    const [center, setCenter] = useState([0, 0])

    useEffect(() => {
        const rect = ref.current.getBoundingClientRect()
        setCenter([rect.left + rect.width / 2, rect.top + rect.height / 2])
    }, [])

    useEffect(() => {
        const plateRect = ref.current.getBoundingClientRect()
        setCenter([
            plateRect.left + plateRect.width / 2,
            plateRect.top + plateRect.height / 2
        ])
    }, [dimensions])

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

        zIndex: zIndex,

        rotate: `${mousePos[1] - center[1]} ${center[0] - mousePos[0]} 0 ${calcDeg(mousePos, center)}deg`,
        transition: `rotate ${animationTime}s ease-out`
    }

    return <>
        <div style={plateStyle} ref={ref}></div>
    </>
}

export default ReactivePlate