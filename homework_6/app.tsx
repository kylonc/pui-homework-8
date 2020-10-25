import React from "react";
import { Header, NavItem } from "./components/header";
import { Home } from "./views/home";
import { Shop } from "./views/shop";
import { About } from "./views/about";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

interface IAppState {
    navItem: NavItem;
}

export class App extends React.Component<{}, IAppState> {
    constructor(props = {}) {
        super(props);
        this.state = {
            navItem: null
        };

        this.onNav = this.onNav.bind(this);
    }

    public onNav(navItem: NavItem) {
        this.setState({ navItem });
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Header navItem={this.state.navItem} onClickHandler={this.onNav} />

                <Switch>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home onClickHander={this.onNav}/>
                    </Route>

                </Switch>
            </Router>
        );
    }
}