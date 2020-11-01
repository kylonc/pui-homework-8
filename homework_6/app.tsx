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
    cartCount: number;
    showCart: boolean;
    shouldShowModal: boolean;
    currentNavItem: NavItem;
    newItem: ICartData;
}

export class App extends React.Component<{}, IAppState> {
    public static CARD_TIMEOUT = 5000;

    constructor(props = {}) {
        super(props);
        this.state = {
            cartCount: this.cartCount,
            showCart: false,
            shouldShowModal: false,
            newItem: null,
            currentNavItem: null,
        };

        this.onNav = this.onNav.bind(this);
        this.onUpdateCart = this.onUpdateCart.bind(this);
        this.onCartRemove = this.onCartRemove.bind(this);
        this.onCartClose = this.onCartClose.bind(this);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    public get cartCount(): number {
        const cartString = localStorage.getItem(Cart.LOCALSTORAGE_NAME);
        if (cartString) {
            const cart = JSON.parse(cartString);
            return cart.reduce((acc: number, curr: ICartData) => {
                return acc + curr.quantity;
            }, 0);
        }
        return 0;
    }

    public onNav(currentNavItem: NavItem) {
        this.setState({
            currentNavItem,
            showCart: false,
            shouldShowModal: false
        });
    }

    public onUpdateCart(newItem: ICartData) {
        this.setState({
            newItem,
            showCart: true,
            cartCount: this.cartCount,
        });
    }

    private onCartRemove() {
        this.setState({
            showCart: false,
            cartCount: this.cartCount
        });
    }

    private onCartClose() {
        this.setState({
            showCart: false
        });
    }

    private showModal() {
        this.setState({
            shouldShowModal: true
        })
    }

    private closeModal() {
        this.setState({
            shouldShowModal: false
        });
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Header
                    navItem={this.state.currentNavItem}
                    newItem={this.state.newItem}
                    cartCount={this.state.cartCount}
                    showCart={this.state.showCart}
                    onClickHandler={this.onNav}
                    onCartRemove={this.onCartRemove}
                    onCartClose={this.onCartClose}
                    onCartUpdate={this.showModal}
                />

                <Switch>
                    <Route path="/shop">
                        <ShopPage
                            onUpdateCart={this.onUpdateCart}
                        />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/cart">
                        <CartPage CTAClickHandler={this.onNav} />
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