import { Menu } from "./homework_8/src/menu";

window.addEventListener("load", start);

function start() {
    const doggo = document.querySelector(".doggo") as HTMLElement;
    const footfallViz = document.querySelector(".footfall-viz") as HTMLElement;

    if (!(doggo && footfallViz)) {
        return;
    }

    // Initialize the animation with the walk pattern
    const initialPattern = "walk";
    doggo.classList.add(initialPattern);
    footfallViz.classList.add(initialPattern);

    const footFallMenu = new Menu(".footfall-menu .touchable", doggo, footfallViz);
    footFallMenu.activateElements();
}