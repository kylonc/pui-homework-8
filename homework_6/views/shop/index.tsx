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
    VanillaMilk = "vanilla-milk",
    DoubleChocolate = "double-choco"
}

export enum Quantity {
    One = 1,
    Three = 3,
    Six = 6,
    Twelve = 12
}

interface IShopPageProps {
    onUpdateCart: (newItem: ICartData) => void;
}

export interface IShopPageState {
    flavor: Flavor;
    glaze: Glaze;
    quantity: Quantity;
    price: number;
    imgSrc: string;
}

interface IOptionMap {
    [key: string]: {
        name: string;
        price: number;
        imgSrc?: string
    }
}

export interface IOptionData {
    name: string;
    id: string;
    key: Options;
}

type Options = Flavor | Glaze | Quantity;

export class ShopPage extends React.Component<IShopPageProps, IShopPageState> {

    private flavorMap: IOptionMap = {
        [Flavor.Original]: {
            name: "Original",
            price: 8,
            imgSrc: "https://www.veganricha.com/wp-content/uploads/2020/05/Sweet-potato-cinnamon-rolls-veganricha-9420-2-1.jpg"
        },
        [Flavor.OriginalGF]: {
            name: "Original (Gluten Free)",
            price: 10,
            imgSrc: "https://www.paleorunningmomma.com/wp-content/uploads/2017/12/cinnamon-rolls-22.jpg"
        },
        [Flavor.Walnut]: {
            name: "Walnut",
            price: 9,
            imgSrc: "https://www.thelittleepicurean.com/wp-content/uploads/2015/02/chocolate-walnut-cinnamon-rolls-3.jpg"
        },
        [Flavor.Blackberry]: {
            name: "Blackberry",
            price: 10,
            imgSrc: "https://i0.wp.com/gatherforbread.com/wp-content/uploads/2014/08/Blackberry-Cinnamon-Rolls-square.jpg?resize=800%2C800&ssl=1"
        },
        [Flavor.PumpkinSpice]: {
            name: "Pumpkin Spice",
            price: 9,
            imgSrc: "https://diethood.com/wp-content/uploads/2013/10/Pumpkin-Pie-Cinnamon-Rolls-7.jpg"
        },
        [Flavor.CaramelPecan]: {
            name: "Caramel Pecan",
            price: 9,
            imgSrc: "https://www.thechunkychef.com/wp-content/uploads/2018/11/Maple-Caramel-Pecan-Sticky-Buns-Recipe-up-close-680x775.jpg"
        },
    };

    private glazeMap: IOptionMap = {
        [Glaze.None]: {
            name: "None",
            price: 0
        },
        [Glaze.SugarMilk]: {
            name: "Sugar (Milk)",
            price: 2
        },
        [Glaze.VanillaMilk]: {
            name: "Vanilla (Milk)",
            price: 2
        },
        [Glaze.DoubleChocolate]: {
            name: "DoubleChocolate",
            price: 3
        },
    };

    private flavorData: IOptionData[] = [
        {
            name: this.flavorMap[Flavor.Original].name,
            id: "original",
            key: Flavor.Original
        },
        {
            name: this.flavorMap[Flavor.OriginalGF].name,
            id: "original-gf",
            key: Flavor.OriginalGF
        },
        {
            name: this.flavorMap[Flavor.Walnut].name,
            id: "walnut",
            key: Flavor.Walnut
        },
        {
            name: this.flavorMap[Flavor.Blackberry].name,
            id: "blackberry",
            key: Flavor.Blackberry
        },
        {
            name: this.flavorMap[Flavor.PumpkinSpice].name,
            id: "pumpkin-spice",
            key: Flavor.PumpkinSpice
        },
        {
            name: this.flavorMap[Flavor.CaramelPecan].name,
            id: "caramel-pecan",
            key: Flavor.CaramelPecan
        }
    ];

    private glazeData: IOptionData[] = [
        {
            name: this.glazeMap[Glaze.None].name,
            id: "none",
            key: Glaze.None
        },
        {
            name: this.glazeMap[Glaze.SugarMilk].name,
            id: "sugar-milk",
            key: Glaze.SugarMilk
        },
        {
            name: this.glazeMap[Glaze.VanillaMilk].name,
            id: "vanilla-milk",
            key: Glaze.VanillaMilk
        },
        {
            name: this.glazeMap[Glaze.DoubleChocolate].name,
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

    constructor(props: IShopPageProps) {
        super(props);
        this.state = {
            flavor: Flavor.Original,
            glaze: Glaze.None,
            quantity: Quantity.One,
            price: this.flavorMap[Flavor.Original].price + this.glazeMap[Glaze.None].price,
            imgSrc: this.flavorMap[Flavor.Original].imgSrc
        };

        this.onOptionChange = this.onOptionChange.bind(this);
        this.onAddtoCart = this.onAddtoCart.bind(this);
    }

    private onOptionChange(option: keyof IShopPageState, value: Flavor | Quantity | Glaze) {
        const nextState = Object.assign(
            { ...this.state },
            { [option]: value }
        );

        // Update price and imgSrc everytime since we don't know which state changed
        nextState.price = this.flavorMap[nextState.flavor].price + this.glazeMap[nextState.glaze].price;
        nextState.imgSrc = this.flavorMap[nextState.flavor].imgSrc;

        this.setState({ ...nextState })
    }

    private onAddtoCart() {
        const cartString = localStorage.getItem(Cart.LOCALSTORAGE_NAME);
        let cart: ICartData[] = [];

        // Replace flavor and glaze with user-facing names
        const newItem: ICartData = Object.assign(
            {},
            this.state,
            {
                flavor: this.flavorMap[this.state.flavor].name,
                glaze: this.glazeMap[this.state.glaze].name,
            }
        );

        if (!cartString) {
            // no items in the cart yet
            cart = [Object.assign({}, newItem)]
        } else {
            // combine with items already in cart, if possible
            cart = JSON.parse(cartString);
            const itemIndex = cart.findIndex((item: ICartData) => {
                return item.flavor === newItem.flavor && item.glaze === newItem.glaze;
            });

            if (itemIndex >= 0) {
                cart[itemIndex].quantity += newItem.quantity;
            } else {
                cart.push(Object.assign({}, newItem));
            }
        }

        // Save cart to be used in cart page
        localStorage.setItem(
            Cart.LOCALSTORAGE_NAME,
            JSON.stringify(cart)
        )

        this.props.onUpdateCart(newItem);
    }

    render() {
        return (
            <section id="shop-content">
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
                        <section id="flavor" className="selection">
                            <div className="title">flavor:
                                <span className="curr-selection"> {this.flavorMap[this.state.flavor].name} +${this.flavorMap[this.state.flavor].price}</span>
                            </div>
                            <Radio
                                type="flavor"
                                usePlaceholder={true}
                                options={this.flavorData}
                                selectedOption={this.state.flavor}
                                onChangeHandler={this.onOptionChange}
                            />
                        </section>
                        <section id="glaze" className="selection">
                            <div className="title">glaze:
                                <span className="curr-selection"> {this.glazeMap[this.state.glaze].name}  +${this.glazeMap[this.state.glaze].price}</span>
                            </div>
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
            </section>
        );
    }
}