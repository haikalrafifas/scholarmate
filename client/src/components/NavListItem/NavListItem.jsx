import React from "react";
import "./style.css";

export const NavListItem = ({ className, text, href }) => {
  return (
    <div className={`nav-list-item ${className}`}>
      <a href={href} className="list-item">
        {text}
      </a>
    </div>
  );
};

export default NavListItem;
