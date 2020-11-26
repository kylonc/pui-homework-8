export class Menu {
    private selector: string;
    private activeClass: string;
    private activeElement: Element;

    constructor(selector: string, activeClass: string) {
        this.selector = selector;
        this.activeClass = activeClass;
        this.activeElement = null;
    }

    public activateElements() {
        const elems = document.querySelectorAll(this.selector);

        if (!elems.length) {
            throw new Error(`No elements with selector ${this.selector} was found.`);
        }

        elems.forEach((el: Element) => {
            el.addEventListener("click", (ev: Event) => {
                ev.stopPropagation();

                if (this.activeElement) {
                    this.activeElement.classList.remove(this.activeClass);
                }

                el.classList.add(this.activeClass);
                this.activeElement = el;
            })
        })
    }
}