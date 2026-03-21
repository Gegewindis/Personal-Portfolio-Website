function ReactivePlate({
    width = "50px",
    height = "50px",
    padding = "0px",
    margin = "5px",

    backgroundColor = "hsl(0, 0%, 100%)",

    borderRadius = "0px",
    borderWidth = "0px",
    borderStyle = "solid",
    borderColor = "black",

    transform = "",
}) {

    plateStyle = {
        width: width,
        height: height,
        padding: padding,
        margin: margin,

        backgroundColor: backgroundColor,

        borderRadius: borderRadius,
        borderWidth: borderWidth,
        borderStyle: borderStyle,
        borderColor: borderColor,

        transform: transform,
    }

    return <>
        <div style={plateStyle}></div>
    </>
}