import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo/Logo";
import { NavNav } from "../NavNav/NavNav";
import "./style.css";

export const NavNavbar = ({ hasLoggedIn, avatar, className }) => {
  return (
    <div className={`nav-navbar ${className}`}>
      <a href="/">
        <Logo className="logo-instance" />
      </a>
      <NavNav
        property1="nav-menu"
        hasLoggedIn={hasLoggedIn}
        avatar={avatar}
      />
    </div>
  );
};

NavNavbar.propTypes = {
  property1: PropTypes.oneOf(["nav-header", "with-avatar"]),
};
