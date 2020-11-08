import React from "react";
import { Link } from "react-router-dom";
import { Flavor, Glaze, Quantity, OptionSection } from "../option-section";
import "./style.css";

export interface ICartData {
    flavor: Flavor;
    glaze: Glaze;
    quantity: Quantity;
    price: number;
    imgSrc: string;
}

interface ICartProps {
    newItem: ICartData;
    cart: ICartData[];
    onClick: () => void;
    onClose: () => void;
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
                            <span>{OptionSection.FLAVOR_MAP[item.flavor].name}</span>
                            <span>{OptionSection.GLAZE_MAP[item.glaze].name}</span>
                            <span>{`${item.quantity} x $${item.price}`}</span>
                        </section>
                    </section>
                </section>
                <Link to="/cart" onClick={this.props.onClick}>
                    <button className="cta checkout">Go to Cart</button>
                </Link>
            </section>
        )
    }
}