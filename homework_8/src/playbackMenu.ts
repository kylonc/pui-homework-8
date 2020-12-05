import { Menu } from "./menu";

export class PlaybackMenu {
    private static SELECTOR = ".playback-speed-menu";
    private static PREFIX = "speed";

    private speed = 100;
    private menu: Menu;
    private animator: HTMLElement;
    private footfallViz: HTMLElement;

    constructor(animator: HTMLElement, footfallViz: HTMLElement) {
        this.menu = new Menu(PlaybackMenu.SELECTOR);
        this.animator = animator;
        this.footfallViz = footfallViz;

        this.changeSpeed = this.changeSpeed.bind(this);

        this.initialize();
    }

    public activateItems() {
        this.menu.activateItems(this.changeSpeed);
    }

    private initialize() {
        this.animator.classList.add(`${PlaybackMenu.PREFIX}-${this.speed}`);
        this.footfallViz.classList.add(`${PlaybackMenu.PREFIX}-${this.speed}`);
    }

    private changeSpeed(speedItem: HTMLElement) {
        const newSpeed = speedItem.getAttribute("for");
        this.animator.classList.remove(`${PlaybackMenu.PREFIX}-${this.speed}`);
        this.animator.classList.add(`${PlaybackMenu.PREFIX}-${newSpeed}`);
        this.footfallViz.classList.remove(`${PlaybackMenu.PREFIX}-${this.speed}`);
        this.footfallViz.classList.add(`${PlaybackMenu.PREFIX}-${newSpeed}`);
        this.speed = parseInt(newSpeed, 10);
    }
}