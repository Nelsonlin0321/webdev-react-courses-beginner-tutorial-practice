import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img className='nav-log' src="./react-logo.png" alt="react log" />
                <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}