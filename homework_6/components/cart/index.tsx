import React from "react";
import "./style.css";

export interface ICartData {
    flavor: string;
    glaze: string;
    quantity: number;
    price: number;
    imgSrc: string;
}

interface ICartProps {
    newItem: ICartData;
    onRemove: () => void;
    onClose: () => void;
}

export class Cart extends React.Component<ICartProps> {
    public static LOCALSTORAGE_NAME = "Cart";

    constructor(props: ICartProps) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    public get cart(): ICartData[] {
        const cartString = localStorage.getItem(Cart.LOCALSTORAGE_NAME);

        if (cartString) {
            const cart = JSON.parse(cartString);
            return cart;
        }

        return [];
    }

    public set cart(cart: ICartData[]) {
        localStorage.setItem(Cart.LOCALSTORAGE_NAME, JSON.stringify(cart));
    }

    private onUpdate() {
        // Display update modal
    }

    private onRemove() {
        const cart = this.cart;

        const itemIndex = cart.findIndex((item: ICartData) => {
            return item.flavor === this.props.newItem.flavor && item.glaze === this.props.newItem.glaze;
        });

        cart[itemIndex].quantity -= this.props.newItem.quantity;

        // Remove item from cart if remaining quanityt is 0
        if (cart[itemIndex].quantity === 0) {
            cart.splice(itemIndex, 1);
        }

        this.cart = cart;
        this.props.onRemove();
    }

    render() {
        const item = this.props.newItem;
        return (
            <section className="cart-card">
                <section className="card-control">
                    <span
                        className="close-button"
                        onClick={this.props.onClose}
                    >
                        close
                    </span>
                </section>
                <section className="announcement">New item added!</section>
                <section className="list-view">
                    <span
                        className="thumbnail"
                        style={{ backgroundImage: `url(${item.imgSrc})` }}
                    />
                    <section className="item-info">
                        <section className="title">Signature Roll</section>
                        <section className="options">
                            <span>{item.flavor}</span>
                            <span>{item.glaze}</span>
                            <span>{`${item.quantity} x $${item.price}`}</span>
                        </section>
                    </section>
                </section>
                <section className="editable-actions">
                    <button
                        className="action"
                        id="update"
                        onClick={this.onUpdate}
                    >
                        <svg className="icon" width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.45703 1.73205C6.00932 0.775465 7.2325 0.447715 8.18908 1L9.92113 2C10.8777 2.55228 11.2055 3.77547 10.6532 4.73205L7.11029 10.8685C6.84507 11.3279 6.40824 11.6631 5.89588 11.8004L4.52985 12.1664C3.46292 12.4523 2.36625 11.8191 2.08036 10.7522L1.71434 9.38616C1.57705 8.8738 1.64892 8.32789 1.91414 7.86852L5.45703 1.73205ZM8.05511 3.23205C7.57681 2.95591 6.96522 3.11978 6.68908 3.59808L3.8533 8.5098C3.72069 8.73949 3.68475 9.01244 3.75339 9.26862C3.89634 9.80209 4.44467 10.1187 4.97814 9.97573C5.23432 9.90709 5.45274 9.73949 5.58535 9.5098L8.42113 4.59808C8.69728 4.11978 8.5334 3.50819 8.05511 3.23205Z" fill="#818EB1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.03734 5.53109C8.7612 6.00939 8.14961 6.17326 7.67132 5.89712L5.93927 4.89712C5.46097 4.62098 5.2971 4.00939 5.57324 3.53109C5.84938 3.0528 6.46097 2.88893 6.93927 3.16507L8.67132 4.16507C9.14961 4.44121 9.31349 5.0528 9.03734 5.53109Z" fill="#818EB1" />
                        </svg>
                        Update
                    </button>
                    <button
                        className="action"
                        id="remove"
                        onClick={this.onRemove}
                    >
                        <svg className="icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 9.91421L0 1.41421L1.41421 0L9.91421 8.5L8.5 9.91421Z" fill="#818EB1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 1.90735e-06L0 8.5L1.41421 9.91422L9.91421 1.41422L8.5 1.90735e-06Z" fill="#818EB1" />
                        </svg>
                        Remove
                    </button>
                </section>
                <button className="cta checkout">Checkout</button>
            </section>
        )
    }
}