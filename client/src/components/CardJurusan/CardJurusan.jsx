
import React from "react";
import "./style.css";

export const CardJurusan = ({ className, image, description }) => {
  return (
    <div className={`card-jurusan ${className}`}>
      <div className="card-image">
        <img src={image} alt="Card" />
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
};


