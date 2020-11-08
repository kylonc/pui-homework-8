import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { NavItem } from "../header";

interface ICTAProps {
    onClickHandler?: (navItem: NavItem) => void;
    disabled?: boolean;
    text: string;
}

export class CTA extends React.Component<ICTAProps> {
    constructor(props: ICTAProps) {
        super(props);
    }

    private onClickHandler(navItem: NavItem): () => void {
        return () => {
            if (!this.props.onClickHandler) {
                return;
            }

            this.props.onClickHandler(navItem);
        };
    }

    render() {
        return (
            <Link to="/shop" onClick={this.onClickHandler(NavItem.SHOP)}>
                <button
                    className="cta"
                    type="button"
                    disabled={ typeof this.props.disabled === "boolean" && this.props.disabled}
                >{this.props.text}</button>
            </Link>
        )
    }
}
