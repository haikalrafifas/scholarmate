import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ property1, className }) => {
  return (
    <div className={`button ${property1} ${className}`}>
      {["primary", "with-logo-right"].includes(property1) && (
        <div className="label">Button</div>
      )}

      {["with-logo-left", "with-logo-right"].includes(property1) && (
        <img
          className="devicon-google"
          alt="Devicon google"
          src={
            property1 === "with-logo-right"
              ? "https://generation-sessions.s3.amazonaws.com/32d6c9cfccb9700a0edfbc17d17c9b5d/img/vector-1.svg"
              : "https://generation-sessions.s3.amazonaws.com/32d6c9cfccb9700a0edfbc17d17c9b5d/img/devicon-google-1.svg"
          }
        />
      )}

      {property1 === "with-logo-left" && <div className="label">Button</div>}
    </div>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["primary", "with-logo-left", "with-logo-right"]),
};

export default Button;
