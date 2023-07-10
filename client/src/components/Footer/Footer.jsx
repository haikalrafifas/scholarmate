import React from "react";
import "./style.css";

export const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-container">
            <div className="abt-scholar">Tentang ScholarMate</div>
            <div className="call-us">Hubungi Kami</div>
            <div className="phone"><span><img src="https://unpkg.com/@fortawesome/fontawesome-free@5.15.3/svgs/solid/phone.svg"/>021-345678</span></div>
            <div className="email"><span><img src="https://unpkg.com/@fortawesome/fontawesome-free@5.15.3/svgs/solid/envelope.svg"/>cs@scholarmate.com</span></div>
        </div>
    </footer>
    );
}
