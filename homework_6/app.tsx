import React from "react";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { Shop } from "./components/shop";
import { About } from "./components/about";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends React.Component {

    public onNavClick(event: Event) {
        event.stopPropagation();
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Header />

                <Switch>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>

                </Switch>
            </Router>
        );
    }
}