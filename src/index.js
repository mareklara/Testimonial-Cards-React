// import reactdom. This is the new structure
import ReactDOM from "react-dom/client";
// import css file
import './index.css';
// import App.js from App.js to here
import App from "./App";


// link the html id=root to js file
const root = ReactDOM.createRoot(document.getElementById("root"));
// this called the function in App.js with an h2
root.render(
    <App></App>
)

