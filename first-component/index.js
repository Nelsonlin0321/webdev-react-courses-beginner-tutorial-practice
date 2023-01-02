// ReactDOM.render(<h1>Hello, React!</h1>,document.getElementById("root"))

// Component
function MainContent() {
    return <h1>Hello! This is my main content!</h1>
}

// need ()
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

ReactDOM.render(
    page,
    document.getElementById("root")
)