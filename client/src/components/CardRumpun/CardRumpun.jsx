import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CardRumpun = ({ property1, className }) => {
  return (
    <div className={`card-rumpun ${className}`}>
      <img
        className="background-image"
        alt="Unsplash vjp"
        src={
          property1 === "kedokteran"
            ? "https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-uip163xcv6w-1@2x.png"
            : property1 === "hukum"
            ? "https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-l4ygusg0fxs-1@2x.png"
            : property1 === "teknik"
            ? "https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-aj9-kmadgou-1@2x.png"
            : property1 === "ekonomi-bisnis"
            ? "https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-it6aov1scw0-1@2x.png"
            : "https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-vjp-wz6hgbg-1-1@2x.png"
        }
      />
      <div className="frame">
        <div className="title-card">Title Card</div>
      </div>
    </div>
  );
};

CardRumpun.propTypes = {
  property1: PropTypes.oneOf([
    "hukum",
    "ekonomi-bisnis",
    "kedokteran",
    "teknik",
    "ilmu-komputer",
  ]),
};
