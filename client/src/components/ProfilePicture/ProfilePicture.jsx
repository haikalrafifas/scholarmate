import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProfilePicture = ({ property1, className }) => {
  return <div className={`profile-picture ${property1} ${className}`} />;
};

ProfilePicture.propTypes = {
  property1: PropTypes.oneOf(["avatar-on-profile-page", "avatar-on-navbar"]),
};

export default ProfilePicture;
