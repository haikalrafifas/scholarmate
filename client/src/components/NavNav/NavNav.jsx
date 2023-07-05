import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";
import { NavListItem } from "../NavListItem/NavListItem";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import "./style.css";

export const NavNav = ({ hasLoggedIn, avatar }) => {
  return (
    <div className="nav-nav">
      <NavListItem listItemClassName="nav-list-item-instance" text="Beasiswa" />
      <NavListItem listItemClassName="nav-list-item-instance" text="Jurusan" />
      {!hasLoggedIn && <NavListItem listItemClassName="nav-list-item-instance" text="Sign In" />}
      {hasLoggedIn
        ? <ProfilePicture className="profile-picture-instance" property1="avatar-on-navbar" avatar={avatar} />
        : <Button property1="primary" text="Sign Up" />
      }
    </div>
  );
};

NavNav.propTypes = {
  property1: PropTypes.oneOf(["nav-menu"]),
};

export default NavNav;
