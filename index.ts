import { Menu } from "./homework_8/src/menu";

window.addEventListener("load", start);

function start() {
    const footFallMenu = new Menu(".touchable", "selected");
    footFallMenu.activateElements();
}