import React from "react";
import { CTA } from "../../components/cta";
import "./style.css"
import { NavItem } from "../../components/header";

interface IHomeProps {
    onClickHander: (navItem: NavItem) => void;
}

export function Home(props: IHomeProps) {
    return (
        <section id="home-content">
            <section id="description">
                <div className="descriptor">Luscious.</div>
                <div className="descriptor">Sinful.</div>
                <div className="descriptor">Delicious.</div>
                <CTA text="Shop Our Rolls" onClickHandler={props.onClickHander}/>
            </section>
            <section id="vertical-hero">
                <img src="https://www.onceuponachef.com/images/2012/04/Cinnamon-Buns-760x983.jpg" alt="cinnamon rolls" />
            </section>
        </section>
    );
}