import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import icon from "./Icon.svg";

export const InputField = ({ property, className }) => {
  return (
    <div className="wrapper">
      <div className={`input-field ${className}`}>
        <div className="title">Title</div>
        <div className="frame">
          <div className="input-password">
            {property === "input-text" && (
              <input type="text" placeholder="Input Text" />
            )}
            {property === "password" && (
              <>
                <input type="password" placeholder="Input Password" />
                <img className="icon" alt="Icon" src={icon} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

InputField.propTypes = {
  property: PropTypes.oneOf(["input-text", "password"]),
};
