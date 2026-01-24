import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

function Header() {
    return(
        <header>
            <div className="header-logo-container">
                <Link to="/">
                    <i className="fa-solid fa-house fa-2x"></i>
                </Link>
            </div>
            <nav className="header-nav">
                <ul>
                    <HashLink className="nav-hashlink" to="/#about-me">About Me</HashLink>
                    <HashLink className="nav-hashlink" to="/#projects">Projects</HashLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header