import React from "react";
import "./style.css";

export const NavListItem = ({ className }) => {
  return (
    <div className={`nav-list-item ${className}`}>
      <a href="#" className="list-item">
        list item
      </a>
    </div>
  );
};

export default NavListItem;
