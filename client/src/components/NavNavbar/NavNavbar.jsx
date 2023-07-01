import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo/Logo";
import { NavNav } from "../NavNav/NavNav";
import "./style.css";

export const NavNavbar = ({ property1, className }) => {
  return (
    <div className={`nav-navbar ${className}`}>
      <Logo className="logo-instance" />
      <NavNav
        property1="nav-menu"
        visible={property1 === "with-avatar" ? false : undefined}
        visible1={property1 === "with-avatar" ? false : undefined}
      />
    </div>
  );
};

NavNavbar.propTypes = {
  property1: PropTypes.oneOf(["nav-header", "with-avatar"]),
};
