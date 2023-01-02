import React from "react"
import ReactDOM from "react-dom"

const page = (
    <div>
        <img src="./logo192.png" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {page}
  </React.StrictMode>
);

// const page = (
//   <div>
//       <h1>My awesome website in React</h1>
//       <h3>Reasons I love React</h3>
//       <ol>
//           <li>It's composable</li>
//           <li>It's declarative</li>
//           <li>It's a hireable skill</li>
//           <li>It's actively maintained by skilled people</li>
//       </ol>
//   </div>
// )

// ReactDOM.render(page, document.getElementById("root"))