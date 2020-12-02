export class Menu {
    private selector: string;

    private lastPattern: string;
    private animator: HTMLElement;
    private footfallViz: HTMLElement;

    constructor(selector: string, animator: HTMLElement, footfallViz: HTMLElement) {
        this.selector = selector;

        this.lastPattern = "walk";
        this.animator = animator;
        this.footfallViz = footfallViz;
    }

    public activateElements() {
        const elems = document.querySelectorAll(this.selector);

        if (!elems.length) {
            throw new Error(`No elements with selector ${this.selector} was found.`);
        }

        elems.forEach((el: HTMLLabelElement) => {
            el.addEventListener("click", (ev: Event) => {
                ev.stopPropagation();

                const newPattern = el.getAttribute("for");
                this.animator.classList.remove(this.lastPattern);
                this.animator.classList.add(newPattern);
                this.footfallViz.classList.remove(this.lastPattern);
                this.footfallViz.classList.add(newPattern);
                this.lastPattern = newPattern;
            })
        })
    }
}