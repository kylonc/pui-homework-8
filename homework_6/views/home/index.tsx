import React from "react";
import { CTA } from "../../components/cta";
import { NavItem } from "../../components/header";
import "./style.css"

interface IHomePageProps {
    CTAClickHandler: (navItem: NavItem) => void;
}

export function HomePage(props: IHomePageProps) {
    return (
        <section id="home-content">
            <section id="description">
                <div className="descriptor">Luscious.</div>
                <div className="descriptor">Sinful.</div>
                <div className="descriptor">Delicious.</div>
                <CTA text="Shop Our Rolls" onClickHandler={props.CTAClickHandler}/>
            </section>
            <section id="vertical-hero">
                <div className="image" />
            </section>
        </section>
    );
}