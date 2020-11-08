import React from "react";
import { Header, NavItem } from "./components/header";
import { Cart, ICartData } from "./components/cart";
import { HomePage } from "./views/home";
import { ShopPage } from "./views/shop";
import { AboutPage } from "./views/about";
import { CartPage } from "./views/cart";
import { LocationPage } from "./views/location";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

interface IAppState {
    cart: ICartData[];
    cartCount: number;
    showCard: boolean;
    currentNavItem: NavItem;
    newItem: ICartData;
}

export class App extends React.Component<{}, IAppState> {
    public static CARD_TIMEOUT = 5000;

    constructor(props = {}) {
        super(props);
        this.state = {
            cart: this.storedCart,
            cartCount: this.getCartCount(this.storedCart),
            showCard: false,
            newItem: null,
            currentNavItem: null,
        };

        this.onNav = this.onNav.bind(this);
        this.onAddToCart = this.onAddToCart.bind(this);
        this.onUpdateCart = this.onUpdateCart.bind(this);
        this.onCardClose = this.onCardClose.bind(this);
    }

    public get storedCart(): ICartData[] {
        const cartString = localStorage.getItem(Cart.LOCALSTORAGE_NAME);

        if (!cartString) {
            return [];
        }

        return JSON.parse(cartString)
    }

    public set storedCart(cart: ICartData[]) {
        localStorage.setItem(Cart.LOCALSTORAGE_NAME, JSON.stringify(cart));
    }

    public getCartCount(cart: ICartData[]): number {
        return cart.reduce((acc: number, curr: ICartData) => {
            return acc + curr.quantity;
        }, 0);

    }

    /*
     * Changes position of underline element as user navigates through different pages.
     */
    public onNav(currentNavItem: NavItem) {
        this.setState({
            currentNavItem,
            showCard: false
        });
    }

    public onAddToCart(cart: ICartData[], newItem: ICartData) {
        this.setState({
            cart,
            newItem,
            showCard: true,
            cartCount: this.getCartCount(cart),
        });

        this.storedCart = cart;
    }

    private onUpdateCart(oldItem: ICartData, newItem: ICartData, remove?: boolean) {
        const cart = this.state.cart.slice();

        const toUpdateIndex = cart.findIndex((curr: ICartData) => {
            return oldItem.flavor === curr.flavor
                && oldItem.glaze === curr.glaze
                && oldItem.quantity === curr.quantity;
        })

        if (remove) {
            cart.splice(toUpdateIndex, 1);
        } else {
            cart[toUpdateIndex] = Object.assign(oldItem, newItem);
        }

        this.setState({
            cart,
            cartCount: this.getCartCount(cart)
        });

        this.storedCart = cart;
    }

    private onCardClose() {
        this.setState({
            showCard: false
        });
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Header
                    navItem={this.state.currentNavItem}
                    newItem={this.state.newItem}
                    cart={this.state.cart.slice()}
                    cartCount={this.state.cartCount}
                    showCard={this.state.showCard}
                    onClickHandler={this.onNav}
                    onCardClose={this.onCardClose}
                />

                <Switch>
                    <Route path="/shop">
                        <ShopPage
                            cart={this.state.cart.slice()}
                            onAddToCart={this.onAddToCart}
                        />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/cart">
                        <CartPage
                            cart={this.state.cart.slice()}
                            onUpdateCart={this.onUpdateCart}
                            CTAClickHandler={this.onNav}
                        />
                    </Route>
                    <Route path="/locations">
                        <LocationPage />
                    </Route>
                    <Route path="/">
                        <HomePage CTAClickHandler={this.onNav} />
                    </Route>

                </Switch>
            </Router>
        );
    }
}