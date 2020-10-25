import React from "react";
import "./style.css"

export function Shop() {
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
                    <button className="cta" type="button">Add to Cart</button>
                    <span id="product-price">$8 Each</span>
                    <span id="product-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
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

                    Available for shipping or in-store pick-up. Choose at checkout.</span>
                </section>
                <form id="product-selection">
                    <section id="flavor" className="selection">
                        <div className="title">flavor</div>
                        <input id="original" type="radio" name="flavor" value="original" hidden={true} checked={true} />
                        <label htmlFor="original" data-content="Original">Original</label>
                        <input id="gluten-free" type="radio" name="flavor" value="gluten-free" hidden={true} />
                        <label htmlFor="gluten-free" data-content="Original (Gluten-Free)">Original (Gluten-Free)</label>
                        <input id="walnut" type="radio" name="flavor" value="walnut" hidden={true} />
                        <label htmlFor="walnut" data-content="Walnut">Walnut</label>
                        <input id="blackberry" type="radio" name="flavor" value="blackberry" hidden={true} />
                        <label htmlFor="blackberry" data-content="Blackberry">Blackberry</label>
                        <input id="pumpkin-spice" type="radio" name="flavor" value="pumpkin-spice" hidden={true} />
                        <label htmlFor="pumpkin-spice" data-content="Pumpkin Spice">Pumpkin Spice</label>
                        <input id="caramel-pecan" type="radio" name="flavor" value="caramel-pecan" hidden={true} />
                        <label htmlFor="caramel-pecan" data-content="Caramel Pecan">Caramel Pecan</label>
                    </section>
                    <section id="glaze" className="selection">
                        <div className="title">glaze</div>
                        <input id="none" type="radio" name="glaze" value="none" hidden={true} checked={true} />
                        <label htmlFor="none" data-content="None">None</label>
                        <input id="sugar" type="radio" name="glaze" value="sugar" hidden={true} />
                        <label htmlFor="sugar" data-content="Sugar (Milk)">Sugar (Milk)</label>
                        <input id="vanilla" type="radio" name="glaze" value="vanilla" hidden={true} />
                        <label htmlFor="vanilla" data-content="Vanilla (Milk)">Vanilla (Milk)</label>
                        <input id="double-chocolate" type="radio" name="glaze" value="double-chocolate" hidden={true} />
                        <label htmlFor="double-chocolate" data-content="Double Chocolate">Double Chocolate</label>
                    </section>
                    <section id="quantity" className="selection">
                        <div className="title">quantity</div>
                        <input id="1" type="radio" name="quantity" value="1" hidden={true} checked={true} />
                        <label htmlFor="1">1</label>
                        <input id="3" type="radio" name="quantity" value="3" hidden={true} />
                        <label htmlFor="3">3</label>
                        <input id="6" type="radio" name="quantity" value="6" hidden={true} />
                        <label htmlFor="6">6</label>
                        <input id="12" type="radio" name="quantity" value="12" hidden={true} />
                        <label htmlFor="12">12</label>
                    </section>
                    <button className="cta" type="button">Add to Cart</button>
                </form>
            </section>
        </section>
    );
}