function Elipse({
    height = "100px",
    width = "100px",

    bottomRightRadius = "100vw",
    bottomLeftRadius = "100vw",
    topRightRadius = "100vw",
    topLeftRadius = "100vw",

    zIndex = "-1",
    position = "absolute",
    backgroundColor = "white",

    top = "0px",
    left = "0px",
}) {
    const styles = {
        backgroundColor: backgroundColor,
        position: position,
        zIndex: zIndex,

        height: height,
        width: width,

        top: top,
        left: left,

        borderBottomRightRadius: bottomRightRadius,
        borderBottomLeftRadius: bottomLeftRadius,
        borderTopRightRadius: topRightRadius,
        borderTopLeftRadius: topLeftRadius,
    }

    return (<div style={styles}></div>);
}

export default Elipse