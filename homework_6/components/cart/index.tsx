import React from "react";
import { Flavor, Glaze, Quantity } from "../../views/shop";
import "./style.css";

export interface ICartData {
    flavor: Flavor;
    glaze: Glaze;
    quantity: Quantity;
    price: number;
}

interface ICartProps {
    newItem: ICartData;
}

export class Cart extends React.Component<ICartProps> {
    public static LOCALSTORAGE_NAME = "Cart";

    constructor(props: ICartProps) {
        super(props);
    }

    render() {
        const item = this.props.newItem;
        return (
            <section className="cart-card">
                <section className="list-view">
                    <section key={`${item.flavor}-${item.glaze}`} className="item">
                        <span className="thumbnail" />
                        <section className="item-info">
                            <section className="title">Signature Roll</section>
                            <section className="label-column">
                                <span>Flavor</span>
                            </section>
                            <section className="value-column">
                                <span>{item.flavor}</span>
                            </section>
                        </section>
                    </section>
                </section>
                <section className="subtotal">Total: <span>{}</span></section>
                <button className="cta checkout">Checkout</button>
            </section>
        )
    }
}