import { useRef, useState, useEffect, useMemo } from "react"
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

    plateColor = "hsl(0, 0%, 100%)",

    plateBorderRadius = "0px",
    plateBorderWidth = "0px",
    plateBorderStyle = "solid",
    plateBorderColor = "black",

    // Options
    mouseRef = null,
    reactiveMult = 1,
    animationTime = 0.3,
    plateZIndex = -2,

}) {
    const ref = useRef(null)
    const [mousePos, setMousePos] = useState([0, 0])
    const xOffsetRef = useRef(0)
    const yOffsetRef = useRef(0)

    const plateWidthInt = parseInt(plateWidth)
    const plateHeightInt = parseInt(plateHeight)
    const columnGapInt = parseInt(columnGap)
    const rowGapInt = parseInt(rowGap)
    const reactiveRadius = plateWidthInt * plateWidthInt * reactiveMult

    const [containerWidthInt, setContainerWidthInt] = useState(0)
    const containerHeightInt = parseInt(containerHeight)

    const cols = Math.ceil(containerWidthInt / (plateWidthInt + columnGapInt))
    const rows = Math.ceil(containerHeightInt / (plateHeightInt + rowGapInt))
    const plateCount = cols * rows

    const plates = useMemo(() => {
        const arr = []
        for (let i = 0; i < plateCount; i++) {
            const row = Math.floor(i / cols)
            const col = i % cols
            const center = [
                col * columnGapInt + col * plateWidthInt + plateWidthInt / 2,
                row * rowGapInt + row * plateHeightInt + plateHeightInt / 2
            ]
            arr.push({ id: i, center })
        }
        return arr
    }, [plateCount, cols, columnGapInt, plateWidthInt, rowGapInt, plateHeightInt])


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
        gridTemplateColumns: `repeat(${cols}, ${plateWidth})`,
        gridTemplateRows: `repeat(${rows}, ${plateHeight})`,
        columnGap: columnGap,
        rowGap: rowGap,

        overflow: "hidden",

    }

    useEffect(() => {
        const timer = setTimeout(() => {
            const element = mouseRef?.current ?? ref.current
            if (!element) return

            function handleMouseMove(e) {
                // console.log(e.clientX - xOffsetRef.current + window.scrollX, e.clientY - yOffsetRef.current + window.scrollY)
                setMousePos([e.clientX - xOffsetRef.current + window.scrollX, e.clientY - yOffsetRef.current + window.scrollY])
            }
            function handleMouseLeave() {
                setMousePos([0, 0])
            }

            element.addEventListener("mousemove", handleMouseMove)
            element.addEventListener("mouseleave", handleMouseLeave)
        }, 0)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const rect = ref.current.getBoundingClientRect()
        setContainerWidthInt(rect.width)
        xOffsetRef.current = rect.left
        yOffsetRef.current = rect.top
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
            {plates.map(plate => {
                const vx = plate.center[0] - mousePos[0]
                const vy = plate.center[1] - mousePos[1]
                const vectorLenSq = vx * vx + vy * vy

                return (
                    <ReactivePlate
                        key={plate.id}
                        height={plateHeight}
                        width={plateWidth}
                        mousePos={(vectorLenSq <= reactiveRadius * reactiveMult) ? mousePos : [0, 0]}
                        backgroundColor={plateColor}
                        borderRadius={plateBorderRadius}
                        borderColor={plateBorderColor}
                        borderStyle={plateBorderStyle}
                        borderWidth={plateBorderWidth}
                        reactiveMult={reactiveMult}
                        animationTime={animationTime}
                        zIndex={plateZIndex}
                        center={plate.center}
                    />
                )
            })}
        </div>
    )
}

export default ReactivePlatesContainer