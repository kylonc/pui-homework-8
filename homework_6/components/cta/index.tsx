import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { NavItem } from "../header";

interface ICTAProps {
    onClickHandler: (naveItem: NavItem) => void;
    text: string;
}

export class CTA extends React.Component<ICTAProps> {
    constructor(props: ICTAProps) {
        super(props);
    }

    private onClickHandler(navItem: NavItem): () => void {
        return () => {
            this.props.onClickHandler(navItem);
        };
    }

    render() {
        return (
            <Link to="/shop" onClick={this.onClickHandler(NavItem.SHOP)}>
                <button className="cta" type="button">{this.props.text}</button>
            </Link>
        )
    }
}
