import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const RadioFilter = ({ title, name, value, onChange }) => {
    return (
    <>
      <div className="frame-10">
        <input type="radio" className="radio" name={name} value={value} onChange={onChange} />
        <div className="text-wrapper-5">{title}</div>
      </div>
    </>
    );
}

RadioFilter.propTypes = {
    title: PropTypes.string.isRequired,
  };
