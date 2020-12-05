import { GaitMenu } from "./homework_8/src/gaitMenu";
import { PlaybackMenu } from "./homework_8/src/playbackMenu";

window.addEventListener("load", start);

function start() {
    const doggo = document.querySelector(".doggo") as HTMLElement;
    const footfallViz = document.querySelector(".footfall-viz") as HTMLElement;

    if (!(doggo && footfallViz)) {
        return;
    }

    const gaitMenu = new GaitMenu(doggo, footfallViz);
    const playbackMenu = new PlaybackMenu(doggo, footfallViz);

    gaitMenu.activateItems();
    playbackMenu.activateItems();
}