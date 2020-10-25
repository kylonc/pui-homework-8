import React from "react";
import "./style.css"

export function About() {
    return (
        <section id="about-content">
            <div id="vertical-hero" />
            <section id="text">
                <span id="title">Made with love.<span id="heart" /></span>
                <p className="body">We are a multi-generational, cross-cultural, multi-hyphenated, always imitated and never replicated, family-owned, Pilsbury Dough Boy-approved establishment.</p>
                <p className="body">Sometimes our rolls are a week old; sometimes they’re made the day of. No matter when you come in, it’s always a gamble, and that’s why people love us. If you’re feeling extra adventurous, make sure you also try our milk. What kind of milk, you ask? Come taste it and find out for yourself!</p>
            </section>
        </section>
    );
}