import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CardRumpun = ({ rumpun, className, text, href }) => {
  return (
    <div className={`card-rumpun ${className}`} onClick={() => {window.location.href = `/jurusan/${href}`}}>
      <img
        className="background-image"
        alt="Unsplash vjp"
        src={
          rumpun === "kedokteran"
            ? "https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-uip163xcv6w-1@2x.png"
            : rumpun === "hukum"
            ? "https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-l4ygusg0fxs-1@2x.png"
            : rumpun === "teknik"
            ? "https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-aj9-kmadgou-1@2x.png"
            : rumpun === "ekonomi-bisnis"
            ? "https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-it6aov1scw0-1@2x.png"
            : "https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-vjp-wz6hgbg-1-1@2x.png"
        }
      />
      <div className="frame">
        <div className="title-card">{text}</div>
      </div>
    </div>
  );
};

CardRumpun.propTypes = {
  rumpun: PropTypes.oneOf([
    "hukum",
    "ekonomi-bisnis",
    "kedokteran",
    "teknik",
    "ilmu-komputer",
  ]),
};
