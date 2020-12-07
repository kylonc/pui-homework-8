export class Menu {
    private static ITEM_SELECTOR = ".touchable";
    private container: HTMLElement;

    constructor(containerSelector: string) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            throw new Error(`No menu with selector ${containerSelector} was found`);
        }
    }

    public activateItems(clickCallback: (item: HTMLElement) => void) {
        const items = this.container.querySelectorAll(Menu.ITEM_SELECTOR);

        if (!items.length) {
            throw new Error(`No menu item with selector ${Menu.ITEM_SELECTOR} was found`)
        }

        items.forEach((item: HTMLElement) => {
            item.addEventListener("click", (event: Event) => {
                event.stopPropagation();
                clickCallback(item);
            });
        });
    }
}