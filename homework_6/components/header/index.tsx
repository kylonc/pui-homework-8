import React from "react";
import { Link } from "react-router-dom";
import { Cart, ICartData } from "../cart";
import "./style.css"

interface IHeaderProps {
    navItem: NavItem;
    newItem: ICartData;
    cart: ICartData[];
    cartCount: number;
    showCard: boolean;
    onClickHandler: (navItem: NavItem) => void;
    onCardClose: () => void;
}

export enum NavItem {
    SHOP,
    ABOUT,
    LOCATIONS,
    CART
};

export class Header extends React.Component<IHeaderProps> {
    constructor(props: IHeaderProps) {
        super(props);
    }

    private clickHandler(navItem: NavItem): () => void {
        return () => {
            this.props.onClickHandler(navItem);
        }
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <section className="nav-wrapper">
                        <nav>
                            <section className="nav-left">
                                <Link
                                    to="/locations"
                                    id="locations"
                                    className={this.props.navItem === NavItem.LOCATIONS ? "nav-item selected" : "nav-item"}
                                    onClick={this.clickHandler(NavItem.LOCATIONS)}
                                >locations</Link>
                                <Link
                                    to="/about"
                                    id="about"
                                    className={this.props.navItem === NavItem.ABOUT ? "nav-item selected" : "nav-item"}
                                    onClick={this.clickHandler(NavItem.ABOUT)}
                                >about</Link>
                            </section>
                            <Link
                                to="/"
                                className="logo"
                                onClick={this.clickHandler(null)}
                            >
                                <span id="line-1">Bun Bun</span>
                                <span id="line-2">Bake Shop</span>
                            </Link>
                            <section className="nav-right">
                                <Link
                                    to="/shop"
                                    id="shop"
                                    className={this.props.navItem === NavItem.SHOP ? "nav-item selected" : "nav-item"}
                                    onClick={this.clickHandler(NavItem.SHOP)}
                                >shop</Link>
                                <Link
                                    to="/cart"
                                    id="cart"
                                    className="nav-item"
                                    onClick={this.clickHandler(null)}
                                >
                                    <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.691 0.5H22.5V1.5H19.309L13.809 12.5H4.69098L0.190979 3.5H17.191L18.691 0.5ZM16.691 4.5H1.80901L5.30901 11.5H13.191L16.691 4.5Z" fill="#FFFBEE" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15C6.27614 15 6.5 14.7761 6.5 14.5C6.5 14.2239 6.27614 14 6 14C5.72386 14 5.5 14.2239 5.5 14.5C5.5 14.7761 5.72386 15 6 15ZM6 16C6.82843 16 7.5 15.3284 7.5 14.5C7.5 13.6716 6.82843 13 6 13C5.17157 13 4.5 13.6716 4.5 14.5C4.5 15.3284 5.17157 16 6 16Z" fill="#FFFBEE" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C12.2761 15 12.5 14.7761 12.5 14.5C12.5 14.2239 12.2761 14 12 14C11.7239 14 11.5 14.2239 11.5 14.5C11.5 14.7761 11.7239 15 12 15ZM12 16C12.8284 16 13.5 15.3284 13.5 14.5C13.5 13.6716 12.8284 13 12 13C11.1716 13 10.5 13.6716 10.5 14.5C10.5 15.3284 11.1716 16 12 16Z" fill="#FFFBEE" />
                                    </svg>
                                    ({this.props.cartCount} items)
                                </Link>
                            </section>
                        </nav>
                        {this.props.showCard &&
                            <Cart
                                newItem={this.props.newItem}
                                cart={this.props.cart}
                                onClick={this.clickHandler(null)}
                                onClose={this.props.onCardClose}
                            />}
                    </section>
                </header>
            </React.Fragment>
        );
    }
}