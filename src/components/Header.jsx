import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import homeIcon from '../assets/images/home.svg'

function Header({
    headerHeight = "75px",
    backgroundColor = "hsL(0, 0%, 0%)",
    padding = "15px",
    zIndex = "1",
    justifyContent = "space-evenly",
    boxShadow = "0px 0px 0px hsL(0, 0%, 0%)",

    logoContainerWidth = "45%",
    menuContainerWidth = "45%",

    fontSize = "25px",

    // Options
    menus = [],
    houseOn = true,




}) {
    const headerStyle = {
        height: headerHeight,
        backgroundColor: backgroundColor,

        padding: padding,

        zIndex: zIndex,
        justifyContent: justifyContent,
        boxShadow: boxShadow,

        borderBottom: "solid 1px var(--color-white)",

        display: "flex",
        flexDirection: "row",
        position: "sticky",
        top: "0",
    }

    const logoContainerStyle = {
        width: logoContainerWidth,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    }

    const menuContainerStyle = {
        width: menuContainerWidth,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    }

    const menuNavStyle = {
        fontSize: fontSize,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        listStyleType: "none",
    }

    return (
        <header style={headerStyle}>

            <div style={logoContainerStyle}>
                {(houseOn ?
                    <Link to="/Personal-Portfolio-Website/">
                        <img src={homeIcon} alt="House" />
                    </Link> : "")}

            </div>
            <nav style={menuContainerStyle}>
                <ul style={menuNavStyle}>
                    {menus.map((choice, index) => {
                        return <HashLink key={index} to={choice.to}>{choice.text}</HashLink>
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header