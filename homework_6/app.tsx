import React from "react";
import { Header, NavItem } from "./components/header";
import { Home } from "./views/home";
import { Shop } from "./views/shop";
import { About } from "./views/about";
import { Cart, ICartData } from "./components/cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

interface IAppState {
    currentNavItem: NavItem;
    showCart: boolean;
    newItem: ICartData;
}

export class App extends React.Component<{}, IAppState> {
    constructor(props = {}) {
        super(props);
        this.state = {
            currentNavItem: null,
            showCart: false,
            newItem: null
        };

        this.onNav = this.onNav.bind(this);
        this.onUpdateCart = this.onUpdateCart.bind(this);
    }

    public onNav(currentNavItem: NavItem) {
        this.setState({
            currentNavItem,
            showCart: false,
        });
    }

    public onUpdateCart(newItem: ICartData) {
        this.setState({
            newItem,
            showCart: true
        });
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Header
                    navItem={this.state.currentNavItem}
                    newItem={this.state.newItem}
                    showCart={this.state.showCart}
                    onClickHandler={this.onNav}
                />

                <Switch>
                    <Route path="/shop">
                        <Shop onUpdateCart={this.onUpdateCart} />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home onClickHander={this.onNav} />
                    </Route>

                </Switch>
            </Router>
        );
    }
}