import React from "react";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import "./style.css";

export const OnDevelop = () => {
  return (
    <div className="PROSPEK-KARIR">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="ellipse" />
          <h1 className="text-wrapper">PROSPEK KARIR</h1>
          <p className="p">Fitur ini sedang dalam pengembangan</p>
          <div className="p-1">Mohon kembali di lain waktu </div>
          <NavNavbar hasLoggedIn={true} avatar="" className="nav-navbar-instance" />
        </div>
      </div>
    </div>
  );
};