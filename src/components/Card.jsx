import { useState } from "react"
import { Link } from "react-router-dom";

function Card({
    // Card CSS 
    width = "300px",
    height = "400px",
    padding = "0px",
    margin = "10px",
    marginTop = undefined,
    marginBottom = undefined,
    marginLeft = undefined,
    marginRight = undefined,

    backgroundColor = "hsl(0, 0%, 100%)",

    borderRadius = "10px",
    borderWidth = "0px",
    borderStyle = "solid",
    borderColor = "black",
    cardBoxShadow = "0px 4px 8px 0px hsla(0, 0%, 0%, 0.20)",

    transform = "scale(1.05)",
    transition = "transform 0.3s ease",
    cursor = "default",

    overflow = "hidden",
    display = "flex",
    flexDirection = "column",

    // Title CSS
    titleMargin = "0px",
    titleMarginLeft = "0px",
    titleFontSize = "25px",
    titleColor = "",
    titleFontFamily = "",

    // Line CSS
    lineMarginTop = "10px",
    lineMarginBottom = "10px",
    lineWidth = "100%",
    lineColor = "black",

    // Paragraph CSS
    paragraphMargin = "0px",
    paragraphMarginLeft = "0px",
    paragraphFontSize = "15px",
    paragraphFontFamily = "",

    // Text Container CSS
    textPadding = "20px",

    // Image CSS
    imageWidth = "100%",
    imageHeight = "",
    imageObjectFit = "cover",
    imageObjectPosition = "top left",
    imageMargin = "0px",

    // Options
    imageOn = false,
    titleOn = true,
    lineOn = true,
    paragraphOn = true,
    hover = true,

    // Content
    titleText = "Title Example",
    paragraphText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iste deleniti officia, debitis provident architecto quisquam unde libero minima deserunt reprehenderit labore ex nobis quo ut, voluptatibus in, nihil aspernatur!",
    imageSrc = "",
    imageAlt = "",
    toLink = null
}) {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        width: width,
        height: height,
        padding: padding,
        margin: margin,
        marginTop: marginTop ?? margin,
        marginBottom: marginBottom ?? margin,
        marginLeft: marginLeft ?? margin,
        marginRight: marginRight ?? margin,

        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderWidth: borderWidth,
        borderStyle: borderStyle,
        borderColor: borderColor,
        boxShadow: cardBoxShadow,

        transition: transition,

        overflow: overflow,
        display: display,
        flexDirection: flexDirection,
        flexShrink: "0",
    }

    const hoveredCardStyle = {
        ...cardStyle,
        transform: transform,
        cursor: cursor,
    }

    const titleStyle = {
        margin: titleMargin,
        marginLeft: titleMarginLeft,
        fontSize: titleFontSize,
        color: titleColor,
        fontFamily: titleFontFamily
    }

    const lineStyle = {
        marginTop: lineMarginTop,
        marginBottom: lineMarginBottom,
        width: lineWidth,
        borderColor: lineColor,
    }

    const paragraphStyle = {
        fontSize: paragraphFontSize,
        margin: paragraphMargin,
        marginLeft: paragraphMarginLeft,
        fontFamily: paragraphFontFamily,
    }

    const imageStyle = {
        width: imageWidth,
        height: imageHeight,
        marginTop: imageMargin,
        marginLeft: imageMargin,
        objectFit: imageObjectFit,
        objectPosition: imageObjectPosition,
    }

    const textContainerStyle = {
        padding: textPadding
    }

    const card = (
        <div style={isHovered && hover ? hoveredCardStyle : cardStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {imageOn ? <img src={imageSrc} alt={imageAlt} style={imageStyle} /> : null}
            <div style={textContainerStyle}>
                {titleOn ? <h1 style={titleStyle}>{titleText}</h1> : null}
                {lineOn ? <hr style={lineStyle} /> : null}
                {paragraphOn ? <p style={paragraphStyle}>{paragraphText}</p> : null}
            </div>
        </div>
    )

    return toLink ? <Link to={toLink} style={{ display: "contents" }}>{card}</Link> : card;
}

export default Card