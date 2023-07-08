import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";
import { NavListItem } from "../NavListItem/NavListItem";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import "./style.css";

export const NavNav = ({ hasLoggedIn, avatar, className }) => {
  return (
    <div className="nav-nav">
      <NavListItem listItemClassName="nav-list-item-instance" text="Beasiswa" href="/beasiswa" />
      <NavListItem listItemClassName="nav-list-item-instance" text="Jurusan" href="/jurusan" />
      {!hasLoggedIn && <NavListItem listItemClassName="nav-list-item-instance" text="Sign In" href="/login" />}
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
