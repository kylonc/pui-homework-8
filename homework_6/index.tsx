import React from "react";
import ReactDom from "react-dom";
import { App } from "./app";

window.addEventListener("load", () => {
    ReactDom.render(<App />, document.getElementById("root"));
});