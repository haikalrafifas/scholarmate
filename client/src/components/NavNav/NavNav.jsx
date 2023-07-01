import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";
import { NavListItem } from "../NavListItem/NavListItem";
import "./style.css";

export const NavNav = ({ property1 }) => {
  return (
    <div className="nav-nav">
      <NavListItem listItemClassName="nav-list-item-instance" text="Beasiswa" />
      <NavListItem listItemClassName="nav-list-item-instance" text="Jurusan" />
      <NavListItem listItemClassName="nav-list-item-instance" text="Karir" />
      <NavListItem listItemClassName="nav-list-item-instance" text="Sign In" />
      <Button property1="primary" text="Sign Up" />
    </div>
  );
};

NavNav.propTypes = {
  property1: PropTypes.oneOf(["nav-menu"]),
};

export default NavNav;
