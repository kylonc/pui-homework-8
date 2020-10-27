import React from "react";
import "./style.css"
import { Cart } from "../../components/cart";
import { Radio } from "../../components/radio";
import { ICartData } from "../../components/cart";

export enum Flavor {
    Original = "original",
    OriginalGF = "original-gf",
    Walnut = "walnut",
    Blackberry = "blackberry",
    PumpkinSpice = "pumpkin-spice",
    CaramelPecan = "caramel-pecan"
}

export enum Glaze {
    None = "none",
    SugarMilk = "sugar-milk",
    SugarVanilla = "sugar-vanilla",
    DoubleChocolate = "double-choco"
}

export enum Quantity {
    One = 1,
    Three = 3,
    Six = 6,
    Twelve = 12
}

interface IShopProps {
    onUpdateCart: (newItem: ICartData) => void;
}

export interface IShopState {
    flavor: Flavor;
    glaze: Glaze;
    quantity: Quantity;
    price: number;
}

interface IPriceData {
    [key: string]: number;
}

export interface IOptionData {
    name: string;
    id: string;
    key: Options;
}

type Options = Flavor | Glaze | Quantity;

export class Shop extends React.Component<IShopProps, IShopState> {
    private flavorData: IOptionData[] = [
        {
            name: "Original",
            id: "original",
            key: Flavor.Original
        },
        {
            name: "Original (Gluten Free)",
            id: "original-gf",
            key: Flavor.OriginalGF
        },
        {
            name: "Walnut",
            id: "walnut",
            key: Flavor.Walnut
        },
        {
            name: "Blackberry",
            id: "blackberry",
            key: Flavor.Blackberry
        },
        {
            name: "Pumpkin Spice",
            id: "pumpkin-spice",
            key: Flavor.PumpkinSpice
        },
        {
            name: "Caramel Pecan",
            id: "caramel-pecan",
            key: Flavor.CaramelPecan
        }
    ];

    private glazeData: IOptionData[] = [
        {
            name: "None",
            id: "none",
            key: Glaze.None
        },
        {
            name: "Sugar (Milk)",
            id: "sugar-milk",
            key: Glaze.SugarMilk
        },
        {
            name: "Vanilla (Milk)",
            id: "vanilla-milk",
            key: Glaze.SugarVanilla
        },
        {
            name: "Double Chocolate",
            id: "double-choco",
            key: Glaze.DoubleChocolate
        },
    ];

    private quantityData: IOptionData[] = [
        {
            name: "1",
            id: "1",
            key: Quantity.One
        },
        {
            name: "3",
            id: "3",
            key: Quantity.Three
        },
        {
            name: "6",
            id: "6",
            key: Quantity.Six
        },
        {
            name: "12",
            id: "12",
            key: Quantity.Twelve
        },
    ];

    private flavorPrice: IPriceData = {
        [Flavor.Original]: 8,
        [Flavor.OriginalGF]: 10,
        [Flavor.Walnut]: 9,
        [Flavor.Blackberry]: 10,
        [Flavor.PumpkinSpice]: 9,
        [Flavor.CaramelPecan]: 9,
    }

    private glazePrice: IPriceData = {
        [Glaze.None]: 0,
        [Glaze.SugarMilk]: 2,
        [Glaze.SugarVanilla]: 2,
        [Glaze.DoubleChocolate]: 3,
    }

    constructor(props: IShopProps) {
        super(props);
        this.state = {
            flavor: Flavor.Original,
            glaze: Glaze.None,
            quantity: Quantity.One,
            price: this.flavorPrice[Flavor.Original] + this.glazePrice[Glaze.None]
        };

        this.onOptionChange = this.onOptionChange.bind(this);
        this.onAddtoCart = this.onAddtoCart.bind(this);
    }

    private onOptionChange(option: keyof IShopState, value: Flavor | Quantity | Glaze) {
        const nextState = Object.assign(
            { ...this.state },
            { [option]: value }
        );
        nextState.price = this.flavorPrice[nextState.flavor] + this.glazePrice[nextState.glaze];
        this.setState({ ...nextState })
    }

    private onAddtoCart() {
        const cartString = localStorage.getItem(Cart.LOCALSTORAGE_NAME);
        let cart: ICartData[] = [];

        if (!cartString) {
            // no items in the cart yet
            cart = [Object.assign({}, this.state)]
        } else {
            // combine with items already in cart, if possible
            const { flavor, glaze, quantity } = this.state;
            cart = JSON.parse(cartString);
            const itemIndex = cart.findIndex((item: ICartData) => {
                return item.flavor === flavor && item.glaze === glaze;
            });

            if (itemIndex >= 0) {
                cart[itemIndex].quantity += quantity;
            } else {
                cart.push(Object.assign({}, this.state));
            }
        }

        localStorage.setItem(
            Cart.LOCALSTORAGE_NAME,
            JSON.stringify(cart)
        )

        this.props.onUpdateCart(cart[cart.length - 1]);
    }

    render() {
        return (
            <section id="shop-content">
                <section id="product-photos">
                    <div id="highlight" />
                    <section id="carousel">
                        <div className="thumbnail" id="thumb-1" />
                        <div className="thumbnail" id="thumb-2" />
                    </section>
                </section>
                <section id="product-details">
                    <section id="product-header">
                        <span id="product-name">Signature Roll</span>
                        <button
                            className="cta"
                            type="button"
                            onClick={this.onAddtoCart}
                        >
                            Add to Cart
                        </button>
                        <span id="product-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <span className="product-pricing">Total: ${this.state.price * this.state.quantity}</span>
                    </section>
                    <section id="product-description">
                        <span className="product-desc-content">Our signature cinnamon rolls are devilishy delicious and come in a variety of
                        unseasonal flavors. Raise your cholestrol with our variety of icing options for the perfect sweet treat. Pop
                        your rolls in the microwave for 30 seconds before serving to and feel like you’re receiving a warm cardiac
                        arrest from this delicious dessert!</span>
                        <span className="product-desc-content">We work with local farmers to source organic ingredients, which make our
                        rolls that much more special and delicious.</span>
                        <span className="product-desc-content">All our pastries are non-GMO, cage-free, free range, and made with 100%
                        love.</span>
                        <span className="product-desc-content shipping">
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
                    </section>
                    <form id="product-selection">
                        <section id="flavor" className="selection">
                            <div className="title">flavor</div>
                            <Radio
                                type="flavor"
                                usePlaceholder={true}
                                options={this.flavorData}
                                selectedOption={this.state.flavor}
                                onChangeHandler={this.onOptionChange}
                            />
                        </section>
                        <section id="glaze" className="selection">
                            <div className="title">glaze</div>
                            <Radio
                                type="glaze"
                                usePlaceholder={true}
                                options={this.glazeData}
                                selectedOption={this.state.glaze}
                                onChangeHandler={this.onOptionChange}
                            />
                        </section>
                        <section id="quantity" className="selection">
                            <div className="title">quantity</div>
                            <Radio
                                type="quantity"
                                usePlaceholder={false}
                                options={this.quantityData}
                                selectedOption={this.state.quantity}
                                onChangeHandler={this.onOptionChange}
                            />
                        </section>
                        <span className="product-pricing">Total: ${this.state.price * this.state.quantity}</span>
                        <button
                            className="cta"
                            type="button"
                            onClick={this.onAddtoCart}
                        >
                            Add to Cart
                        </button>
                    </form>
                </section>
            </section>
        );
    }
}