
import React from "react";
import "./style.css";

export const CardJurusan = ({ image, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Card" />
      </div>
      <div className="card-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem saepe! Ea voluptas blanditiis maiores libero sequi officiis amet ipsa culpa nihil deleniti minima, mollitia ullam dolore voluptatibus, fugiat natus.</p>
      </div>
    </div>
  );
};


