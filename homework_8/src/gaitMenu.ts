import { Menu } from "./menu";

export class GaitMenu {
    private static SELECTOR = ".gait-menu";

    private gait = "walk";

    private menu: Menu;
    private animator: HTMLElement;
    private footfallViz: HTMLElement;

    constructor(animator: HTMLElement, footfallViz: HTMLElement) {
        this.menu = new Menu(GaitMenu.SELECTOR);
        this.animator = animator;
        this.footfallViz = footfallViz;

        this.activateItems = this.activateItems.bind(this);
        this.changeGait = this.changeGait.bind(this);

        this.initialize();
    }

    public activateItems() {
        this.menu.activateItems(this.changeGait)
    }

    private initialize() {
        // Initialize the animation with the walk pattern
        this.animator.classList.add(this.gait);
        this.footfallViz.classList.add(this.gait);
    }

    private changeGait(gaitItem: HTMLElement) {
        const newGait = gaitItem.getAttribute("for") as string;
        this.animator.classList.remove(this.gait);
        this.animator.classList.add(newGait);
        this.footfallViz.classList.remove(this.gait);
        this.footfallViz.classList.add(newGait);
        this.gait = newGait;
    }
}