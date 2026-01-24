function Circle(props) {
    const styles = {
        backgroundColor: "var(--color-background-circles)",
        position: "absolute",
        zIndex: "-1",

        height: props.height,
        width: props.width,
        insetInlineStart: props.start,
        insetInlineEnd: props.end,
        transform: props.move,

        borderBottomRightRadius: props.botRight,
        borderBottomLeftRadius: props.botLeft,
        borderTopRightRadius: props.topRight,
        borderTopLeftRadius: props.topLeft,

    }   //set default values

    return(<div style={styles}></div>);


}

Circle.defaultProps = {
    height: "0px",
    width: "0px",
    start: "unset",
    end: "unset",
    move: "translate(0, 0)",
    topRight: "0px",
    topLeft: "0px",
    botRight: "0px",
    botLeft: "0px",
}

export default Circle