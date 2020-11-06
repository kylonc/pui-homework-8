import React from "react";
import { NavItem } from "../../components/header";
import { CTA } from "../../components/cta";
import { ICartData } from "../../components/cart";
import { OptionModal } from "../../components/option-modal";
import { OptionSection } from "../../components/option-section";
import "./style.css";

interface ICartPageProps {
    cart: ICartData[];
    onUpdateCart: (oldItem: ICartData, newItem: ICartData, remove?: boolean) => void;
    CTAClickHandler: (navItem: NavItem) => void;
}

interface ICartPageState {
    showModal: boolean;
    item: ICartData;
}

export class CartPage extends React.Component<ICartPageProps, ICartPageState> {
    constructor(props: ICartPageProps) {
        super(props);

        this.state = {
            showModal: false,
            item: null
        };

        this.closeModal = this.closeModal.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    private getTotalPrice(cart: ICartData[]): number {
        if (!(cart && cart.length)) {
            return 0;
        }

        const totalPrice = cart.reduce((acc: number, curr: ICartData) => {
            return acc + (curr.quantity * curr.price);
        }, 0)

        return totalPrice;
    }


    private showModal(item: ICartData): () => void {
        return () => {
            this.setState({
                showModal: true,
                item
            });
        }
    }

    private closeModal() {
        this.setState({
            showModal: false
        });
    }

    private onRemove(item: ICartData): () => void {
        return () => {
            this.props.onUpdateCart(item, null, true);
        }
    }

    private onUpdate(newItem: ICartData) {
        // Update the cart
        const oldItem = Object.assign({}, { ...this.state.item });
        this.props.onUpdateCart(oldItem, newItem);

        this.setState({
            showModal: false
        });
    }

    private showEmptyState(): JSX.Element {
        return (
            <section className="empty-state">
                <span id="message">No goodies in your cart yet.</span>
                <svg className="sad-cart" width="156" height="108" viewBox="0 0 156 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M129.455 0.5H155.5V5.5H132.545L94.0452 82.5H31.4551L0.955078 21.5H118.955L129.455 0.5ZM116.455 26.5H9.04525L34.5452 77.5H90.9551L116.455 26.5Z"
                        fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M40 103C43.0376 103 45.5 100.538 45.5 97.5C45.5 94.4624 43.0376 92 40 92C36.9624 92 34.5 94.4624 34.5 97.5C34.5 100.538 36.9624 103 40 103ZM40 108C45.799 108 50.5 103.299 50.5 97.5C50.5 91.701 45.799 87 40 87C34.201 87 29.5 91.701 29.5 97.5C29.5 103.299 34.201 108 40 108Z"
                        fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M82 103C85.0376 103 87.5 100.538 87.5 97.5C87.5 94.4624 85.0376 92 82 92C78.9624 92 76.5 94.4624 76.5 97.5C76.5 100.538 78.9624 103 82 103ZM82 108C87.799 108 92.5 103.299 92.5 97.5C92.5 91.701 87.799 87 82 87C76.201 87 71.5 91.701 71.5 97.5C71.5 103.299 76.201 108 82 108Z"
                        fill="black" />
                    <path
                        d="M45 41.5C45 42.8807 43.8807 44 42.5 44C41.1193 44 40 42.8807 40 41.5C40 40.1193 41.1193 39 42.5 39C43.8807 39 45 40.1193 45 41.5Z"
                        fill="black" />
                    <path
                        d="M84 41.5C84 42.8807 82.8807 44 81.5 44C80.1193 44 79 42.8807 79 41.5C79 40.1193 80.1193 39 81.5 39C82.8807 39 84 40.1193 84 41.5Z"
                        fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M56.2241 57.7787C56.0227 58.0235 55.8269 58.2614 55.6289 58.4878C55.0834 59.1112 54.1357 59.1744 53.5123 58.6289C52.8888 58.0833 52.8256 57.1357 53.3712 56.5122C53.4792 56.3887 53.6145 56.2242 53.773 56.0313C54.3019 55.3878 55.0899 54.429 55.9915 53.6284C57.2025 52.553 58.8787 51.5 61 51.5C63.1114 51.5 64.8259 52.5435 66.0603 53.619C67.2361 54.6434 68.1202 55.825 68.6233 56.4975C68.6499 56.5332 68.6755 56.5673 68.7 56.6C69.1971 57.2627 69.0628 58.2029 68.4 58.7C67.7373 59.1971 66.7971 59.0627 66.3 58.4C66.2826 58.3768 66.2649 58.3532 66.247 58.3293C65.7369 57.6485 65.019 56.6906 64.0897 55.881C63.1242 55.0398 62.0887 54.5 61 54.5C59.9213 54.5 58.9309 55.0303 57.9835 55.8716C57.2768 56.4992 56.7326 57.1607 56.2241 57.7787Z"
                        fill="black" />
                </svg>
                <CTA text="Shop Our Rolls" onClickHandler={this.props.CTAClickHandler} />
                <span id="tease">Go ahead. We dare you.</span>
            </section>
        )
    }

    private showCartList(cart: ICartData[]): JSX.Element {
        if (!(cart && cart.length)) {
            return null;
        }

        return (
            <div className="cart-item-container">
                {
                    ...cart.map((item: ICartData) => {
                        return (
                            <div
                                key={item.flavor + item.glaze}
                                className="cart-item"
                            >
                                <span
                                    className="cart-item-img"
                                    style={{ backgroundImage: `url(${item.imgSrc})` }}
                                />
                                <section className="values">
                                    <section className="item-options">
                                        <span>{OptionSection.FLAVOR_MAP[item.flavor].name}</span>
                                        <span>{OptionSection.GLAZE_MAP[item.glaze].name}</span>
                                        <span>{item.quantity}</span>
                                        <span>${item.price}</span>
                                    </section>
                                    <section className="item-supplements">
                                        <section className="item-controls">
                                            <button
                                                className="control"
                                                onClick={this.showModal(item)}
                                            >
                                                <svg className="icon" width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.45703 1.73205C6.00932 0.775465 7.2325 0.447715 8.18908 1L9.92113 2C10.8777 2.55228 11.2055 3.77547 10.6532 4.73205L7.11029 10.8685C6.84507 11.3279 6.40824 11.6631 5.89588 11.8004L4.52985 12.1664C3.46292 12.4523 2.36625 11.8191 2.08036 10.7522L1.71434 9.38616C1.57705 8.8738 1.64892 8.32789 1.91414 7.86852L5.45703 1.73205ZM8.05511 3.23205C7.57681 2.95591 6.96522 3.11978 6.68908 3.59808L3.8533 8.5098C3.72069 8.73949 3.68475 9.01244 3.75339 9.26862C3.89634 9.80209 4.44467 10.1187 4.97814 9.97573C5.23432 9.90709 5.45274 9.73949 5.58535 9.5098L8.42113 4.59808C8.69728 4.11978 8.5334 3.50819 8.05511 3.23205Z" fill="#818EB1" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.03734 5.53109C8.7612 6.00939 8.14961 6.17326 7.67132 5.89712L5.93927 4.89712C5.46097 4.62098 5.2971 4.00939 5.57324 3.53109C5.84938 3.0528 6.46097 2.88893 6.93927 3.16507L8.67132 4.16507C9.14961 4.44121 9.31349 5.0528 9.03734 5.53109Z" fill="#818EB1" />
                                                </svg>
                                                Update
                                            </button>
                                            <button
                                                className="control"
                                                onClick={this.onRemove(item)}
                                            >
                                                <svg className="icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 9.91421L0 1.41421L1.41421 0L9.91421 8.5L8.5 9.91421Z" fill="#818EB1" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 1.90735e-06L0 8.5L1.41421 9.91422L9.91421 1.41422L8.5 1.90735e-06Z" fill="#818EB1" />
                                                </svg>
                                                Remove
                                            </button>
                                        </section>
                                        <section className="item-total">
                                            <span className="label">Item Total:</span> ${item.price * item.quantity}
                                        </section>
                                    </section>
                                </section>
                            </div>
                        );
                    })
                }
            </div>
        )
    }

    render() {
        const cart: ICartData[] = this.props.cart;
        const total = this.getTotalPrice(cart);

        return (
            <React.Fragment>
                {
                    this.state.showModal &&
                    <OptionModal
                        item={this.state.item}
                        onClose={this.closeModal}
                        onUpdate={this.onUpdate}
                    />
                }
                <section id="cart-content">
                    <section className="cart-list">
                        <div className="cart-header">
                            <span className="header-item" id="big-title">Cart</span>
                            <span className="header-item" id="flavor">Flavor</span>
                            <span className="header-item" id="glaze">Glaze</span>
                            <span className="header-item" id="quantity">Qty</span>
                            <span className="header-item" id="price">Unit Price</span>
                        </div>
                        {cart.length ? this.showCartList(cart) : this.showEmptyState()}
                    </section>
                    <section className="cart-calculation">
                        <div className="header">Tab</div>
                        <section className="amount">
                            <section className="title">
                                <span>Subtotal</span>
                                <span>Taxes</span>
                                <span>Shipping</span>
                            </section>
                            <section className="value">
                                <span>${total}</span>
                                <span>${cart.length}</span>
                                <span>TBD</span>
                            </section>
                        </section>
                        <section className="total">
                            <span className="title">Total</span>
                            <span>${total + cart.length} + Shipping</span>
                        </section>
                        <CTA text="Checkout" disabled={!Boolean(cart.length)} />
                    </section>
                </section >
            </React.Fragment>
        );
    }
}