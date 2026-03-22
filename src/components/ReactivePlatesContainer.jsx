import { useRef, useState, useEffect } from "react"
import ReactivePlate from "./ReactivePlate"

function ReactivePlatesContainer({
    containerWidth = "100%",
    containerHeight = "300px",
    containerMargin = "0px",
    containerPadding = "0px",

    containerColor = "transparent",

    containerPosition = "absolute",
    containerTopOffset = "0px",
    containerZIndex = "-1",
    containerPerspective = "",

    containerBorderRadius = "0px",
    containerBorderWidth = "0px",
    containerBorderStyle = "solid",
    containerBorderColor = "black",

    // Plate CSS
    plateWidth = "75px",
    plateHeight = "75px",
    platePadding = "0px", // Not using in calculations!!
    plateMargin = "3px",

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
        top: containerTopOffset,
        perspective: containerPerspective,

        // Might want to change to grid layout since it gives more predictable center
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        overflow: "hidden",
    }



    // If i pass center it increases performance, need to do that instead
    const ref = useRef(null)
    const plateMarginInt = parseInt(plateMargin)
    const plateWidthInt = parseInt(plateWidth)
    const plateHeightInt = parseInt(plateHeight)
    const [containerWidthInt, setContainerWidthInt] = useState(0)
    const containerHeightInt = parseInt(containerHeight)

    const cols = Math.ceil(containerWidthInt / (plateWidthInt + plateMarginInt))
    const rows = Math.ceil(containerHeightInt / (plateHeightInt + plateMarginInt))
    const plateCount = cols * rows

    useEffect(() => {
        setContainerWidthInt(ref.current.getBoundingClientRect().width)
    }, [])

    return (
        <div style={containerStyle} ref={ref} >
            {Array.from({ length: plateCount }, (_, i) => {
                // const col = i % cols
                // const row = Math.floor(i / cols)
                // const center = [
                //     col * (plateWidthInt + plateMarginInt) + plateWidthInt / 2,
                //     row * (plateHeightInt + plateMarginInt) + plateHeightInt / 2
                // ]
                return (
                    <ReactivePlate
                        key={i}
                        height={plateHeight}
                        width={plateWidth}
                        margin={plateMargin}
                        mousePos={mousePos}
                        backgroundColor={plateColor}
                        borderRadius={plateBorderRadius}
                        borderColor={plateBorderColor}
                        borderStyle={plateBorderStyle}
                        borderWidth={plateBorderWidth}
                        reactiveMult={reactiveMult}
                        animationTime={animationTime}
                        zIndex={plateZIndex}

                    // center={center}
                    />
                )
            })}
        </div>
    )
}

export default ReactivePlatesContainer