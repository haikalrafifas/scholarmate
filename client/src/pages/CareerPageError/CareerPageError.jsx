import React from "react";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "./style.css";

export const CareerPageError = () => {
  return (
    <div className="PROSPEK-KARIR">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="ellipse" />
          <h1 className="text-wrapper">PROSPEK KARIR</h1>
          <p className="p">HASIL YANG KAMU CARI TIDAK DITEMUKAN</p>
          <NavNavbar hasLoggedIn={true} avatar="" className="nav-navbar-instance" />
          <SearchBar
            className="search-bar-instance"
            property="medium"
            placeholder="Cari karir yang ingin kamu ketahui...."
          />
        </div>
      </div>
    </div>
  );
};