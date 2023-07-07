import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const InputField = ({ title, type, placeholder, value }) => {
  return (
    <div className="wrapper">
      <div className="input-field">
        <div className="title">{ title }</div>
        <div className="frame">
          <div className="input-password">
            <>
              <input type={type} placeholder={placeholder} value={value} />
              {type === 'password' && 
                <img
                  className="icon"
                  alt="Show Password"
                  src="https://unpkg.com/@fortawesome/fontawesome-free@5.15.3/svgs/regular/eye.svg"
                />
              }
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.oneOf(["email", "password"]),
};
