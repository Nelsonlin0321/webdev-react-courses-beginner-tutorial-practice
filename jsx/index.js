// ReactDOM.render(<h1>Hello, React!</h1>,document.getElementById("root"))

// Component
function Nav() {
    const navbar = (
        <nav>
            <h1 className="header">My Website</h1>
            <ul>
                <li>
                    Pricing
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
    )
    return navbar
}

ReactDOM.render(
    <Nav/>,
    document.getElementById("root")
)