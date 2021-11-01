import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";

const jsxElement = <h1>My React App</h1>;
console.log(jsxElement);

ReactDom.render(<App />, document.getElementById("root"));
