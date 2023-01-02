import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
