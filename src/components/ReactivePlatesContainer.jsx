import { useRef, useState, useEffect } from "react"
import ReactivePlate from "./ReactivePlate"

function ReactivePlatesContainer({
    containerWidth = "100%",
    containerHeight = "300px",
    containerMargin = "0px",
    containerPadding = "0px",

    containerYOffset = "0px",
    containerXOffset = "0px",
    columnGap = "3px",
    rowGap = "3px",

    containerColor = "transparent",

    containerPosition = "absolute",
    containerZIndex = "-1",
    perspective = "",

    containerBorderRadius = "0px",
    containerBorderWidth = "0px",
    containerBorderStyle = "solid",
    containerBorderColor = "black",

    // Plate CSS
    plateWidth = "75px",
    plateHeight = "75px",
    plateMargin = "0px",

    plateColor = "hsl(0, 0%, 100%)",

    plateBorderRadius = "0px",
    plateBorderWidth = "0px",
    plateBorderStyle = "solid",
    plateBorderColor = "black",


    // Options
    mousePos = [0, 0],
    reactiveMult = 1,
    animationTime = 0.3,
    plateZIndex = -2,

}) {
    const ref = useRef(null)
    const plateMarginInt = parseInt(plateMargin)
    const plateWidthInt = parseInt(plateWidth)
    const plateHeightInt = parseInt(plateHeight)
    const columnGapInt = parseInt(columnGap)
    const rowGapInt = parseInt(rowGap)
    const topOffsetInt = parseInt(containerYOffset)
    const containerXOffsetInt = parseInt(containerXOffset)

    const [containerWidthInt, setContainerWidthInt] = useState(0)
    const containerHeightInt = parseInt(containerHeight)

    const cols = Math.ceil(containerWidthInt / (plateWidthInt + plateMarginInt))
    const rows = Math.ceil(containerHeightInt / (plateHeightInt + plateMarginInt))
    const plateCount = cols * rows


    const containerStyle = {
        width: containerWidth,
        height: containerHeight,
        padding: containerPadding,
        margin: containerMargin,

        backgroundColor: containerColor,

        borderRadius: containerBorderRadius,
        borderWidth: containerBorderWidth,
        borderStyle: containerBorderStyle,
        borderColor: containerBorderColor,

        position: containerPosition,
        zIndex: containerZIndex,
        top: containerYOffset,
        left: containerXOffset,
        perspective: perspective,

        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, auto)`,
        columnGap: columnGap,
        rowGap: rowGap,

        overflow: "hidden",

    }

    useEffect(() => {
        setContainerWidthInt(ref.current.getBoundingClientRect().width)
    }, [])

    useEffect(() => {
        function handleResize() {
            setContainerWidthInt(ref.current.getBoundingClientRect().width)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div style={containerStyle} ref={ref} >
            {Array.from({ length: plateCount }, (_, i) => {
                const row = Math.floor(i / cols)
                const col = i % cols
                const center = [col * columnGapInt + col * plateWidthInt + plateWidthInt / 2, row * rowGapInt + row * plateHeightInt + plateHeightInt / 2]

                return (
                    <ReactivePlate
                        key={i}
                        height={plateHeight}
                        width={plateWidth}
                        margin={plateMargin}
                        mousePos={(mousePos[0] == 0 && mousePos[1] == 0) ? [0, 0] : [mousePos[0] - containerXOffsetInt, mousePos[1] - topOffsetInt]}
                        backgroundColor={plateColor}
                        borderRadius={plateBorderRadius}
                        borderColor={plateBorderColor}
                        borderStyle={plateBorderStyle}
                        borderWidth={plateBorderWidth}
                        reactiveMult={reactiveMult}
                        animationTime={animationTime}
                        zIndex={plateZIndex}
                        center={center}
                    />
                )
            })}
        </div>
    )
}

export default ReactivePlatesContainer