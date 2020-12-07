import React from "react";
import "./style.css"
import { ICartData } from "../../components/cart";
import {
    Flavor,
    Glaze,
    Quantity,
    Options,
    OptionSection
} from "../../components/option-section";

interface IShopPageProps {
    cart: ICartData[];
    onAddToCart: (cart: ICartData[], newItem: ICartData) => void;
}

export interface IShopPageState {
    flavor: Flavor;
    glaze: Glaze;
    quantity: Quantity;
    price: number;
    imgSrc: string;
}

export class ShopPage extends React.Component<IShopPageProps, IShopPageState> {
    constructor(props: IShopPageProps) {
        super(props);
        this.state = {
            flavor: Flavor.Original,
            glaze: Glaze.None,
            quantity: Quantity.One,
            price: OptionSection.FLAVOR_MAP[Flavor.Original].price + OptionSection.GLAZE_MAP[Glaze.None].price,
            imgSrc: OptionSection.FLAVOR_MAP[Flavor.Original].imgSrc
        };

        this.onOptionChange = this.onOptionChange.bind(this);
        this.onAddtoCart = this.onAddtoCart.bind(this);
    }

    private onOptionChange(option: keyof IShopPageState, value: Options) {
        const nextState = Object.assign(
            { ...this.state },
            { [option]: value }
        );

        // Update price and imgSrc everytime since we don't know which option changed
        nextState.price = OptionSection.FLAVOR_MAP[nextState.flavor].price + OptionSection.GLAZE_MAP[nextState.glaze].price;
        nextState.imgSrc = OptionSection.FLAVOR_MAP[nextState.flavor].imgSrc;

        this.setState({ ...nextState })
    }

    private onAddtoCart() {
        const cart: ICartData[] = this.props.cart.slice();

        // Replace flavor and glaze with user-facing names
        const newItem: ICartData = Object.assign({}, this.state);

        // const itemIndex = cart.findIndex((item: ICartData) => {
        //     return item.flavor === newItem.flavor && item.glaze === newItem.glaze;
        // });

        // if (itemIndex >= 0) {
        //     cart[itemIndex].quantity += newItem.quantity;
        // } else {
        //     cart.push(Object.assign({}, newItem));
        // }

        cart.push(Object.assign({}, newItem));

        // Save cart to be used in cart page
        this.props.onAddToCart(cart, newItem);
    }

    render() {
        return (
            <React.Fragment>
                < section id="shop-content" >
                    <section id="product-photos">
                        <div
                            id="highlight"
                            style={{ backgroundImage: `urL(${this.state.imgSrc})` }}
                        />
                        <section id="carousel">
                            <div className="thumbnail" id="thumb-1" />
                            <div className="thumbnail" id="thumb-2" />
                        </section>
                    </section>
                    <section id="product-details">
                        <section id="product-header">
                            <span id="product-name">Signature Roll</span>
                            <span id="product-rating">&#9733;&#9733;&#9733;&#9733;&#9733; (120 Reviews)</span>
                        </section>
                        <span className="shipping">
                            <svg className="truck-icon" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.33333 4.23529H9V12H1V7.47059L4.33333 4.23529Z" stroke="black" />
                                <path d="M25 12H11.6667V6.82353V1H25V12Z" stroke="black" />
                                <path
                                    d="M7.5 13C7.5 14.3807 6.38071 15.5 5 15.5C3.61929 15.5 2.5 14.3807 2.5 13C2.5 11.6193 3.61929 10.5 5 10.5C6.38071 10.5 7.5 11.6193 7.5 13Z"
                                    fill="black" />
                                <path
                                    d="M23 13C23 14.3807 21.8807 15.5 20.5 15.5C19.1193 15.5 18 14.3807 18 13C18 11.6193 19.1193 10.5 20.5 10.5C21.8807 10.5 23 11.6193 23 13Z"
                                    fill="black" />
                            </svg>
                        Available for shipping or in-store pick-up. Please choose at checkout.</span>
                        <form id="product-selection">
                            <OptionSection
                                selectedFlavor={this.state.flavor}
                                selectedGlaze={this.state.glaze}
                                selectedQuantity={this.state.quantity}
                                onOptionChange={this.onOptionChange}
                            />
                            <span className="product-pricing">Total Amount: ${this.state.price * this.state.quantity}</span>
                            <button
                                className="cta"
                                type="button"
                                onClick={this.onAddtoCart}
                            >
                                Add to Cart
                        </button>
                        </form>
                        <section id="product-description">
                            <div className="title">Description</div>
                            <span className="product-desc-content">Our signature cinnamon rolls are devilishy delicious and come in a variety of
                            unseasonal flavors. Raise your cholestrol with our variety of icing options for the perfect sweet treat. Pop
                            your rolls in the microwave for 30 seconds before serving to and feel like you’re receiving a warm cardiac
                        arrest from this delicious dessert!</span>
                            <span className="product-desc-content">We work with local farmers to source organic ingredients, which make our
                        rolls that much more special and delicious.</span>
                            <span className="product-desc-content">All our pastries are non-GMO, cage-free, free range, and made with 100%
                        love.</span>
                        </section>
                    </section>
                </section >
            </React.Fragment>
        );
    }
}