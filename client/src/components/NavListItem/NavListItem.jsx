import React from "react";
import "./style.css";

export const NavListItem = ({ text }) => {
  return (
    <div className="nav-list-item">
      <a href="#" className="list-item">
        { text }
      </a>
    </div>
  );
};

export default NavListItem;
