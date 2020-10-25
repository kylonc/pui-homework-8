import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export function Header() {
    return (
        <header>
            <section id="header">
                <Link to="/" className="logo">
                        <span id="line-1">Bun Bun</span>
                        <span id="line-2">Bake Shop</span>
                </Link>
                <nav>
                    <Link to="/shop" id="shop" className="nav-item">shop</Link>
                    <Link to="/about" id="about" className="nav-item">about us</Link>
                    <Link to="/cart" id="cart" className="nav-item">
                        <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.691 0.5H22.5V1.5H19.309L13.809 12.5H4.69098L0.190979 3.5H17.191L18.691 0.5ZM16.691 4.5H1.80901L5.30901 11.5H13.191L16.691 4.5Z" fill="#FFFBEE" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15C6.27614 15 6.5 14.7761 6.5 14.5C6.5 14.2239 6.27614 14 6 14C5.72386 14 5.5 14.2239 5.5 14.5C5.5 14.7761 5.72386 15 6 15ZM6 16C6.82843 16 7.5 15.3284 7.5 14.5C7.5 13.6716 6.82843 13 6 13C5.17157 13 4.5 13.6716 4.5 14.5C4.5 15.3284 5.17157 16 6 16Z" fill="#FFFBEE" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C12.2761 15 12.5 14.7761 12.5 14.5C12.5 14.2239 12.2761 14 12 14C11.7239 14 11.5 14.2239 11.5 14.5C11.5 14.7761 11.7239 15 12 15ZM12 16C12.8284 16 13.5 15.3284 13.5 14.5C13.5 13.6716 12.8284 13 12 13C11.1716 13 10.5 13.6716 10.5 14.5C10.5 15.3284 11.1716 16 12 16Z" fill="#FFFBEE" />
                        </svg>

                    </Link>
                </nav>
            </section>
        </header>
    )
}