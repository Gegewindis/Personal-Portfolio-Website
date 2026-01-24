import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

function Header() {
    return(
        <header>
            <div className="header-logo-container">
                <Link to="/Personal-Portfolio-Website/">
                    <i className="fa-solid fa-house fa-2x"></i>
                </Link>
            </div>
            <nav className="header-nav">
                <ul>
                    <HashLink className="nav-hashlink" to="/Personal-Portfolio-Website/#about-me">About Me</HashLink>
                    <HashLink className="nav-hashlink" to="/Personal-Portfolio-Website/#projects">Projects</HashLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header