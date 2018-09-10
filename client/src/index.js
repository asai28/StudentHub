import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";

console.log("Keys loaded");
console.log(process.env);
ReactDOM.render(<App />, document.getElementById("root"));

let key = {
    apikey : process.env.REACT_APP_APIKEY
};
export default key;