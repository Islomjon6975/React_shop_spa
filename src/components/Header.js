import { Link } from "react-router-dom"

function Header() {
    return(
        <nav>
            <div className="nav-wrapper">
            <a href="#" className="brand-logo">React</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export {Header}