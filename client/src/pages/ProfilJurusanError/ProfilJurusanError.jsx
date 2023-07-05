import React from "react";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "../ProfilJurusanError/style.css"

export const ProfilJurusanError = () => {
    return (
      <div className="PROFIL-JURUSAN-VIEW">
        <div className="div">
          <div className="p-wrapper">
            <p className="p">
              HASIL YANG KAMU CARI TIDAK DITEMUKAN
            </p>
          </div>
          <div className="frame-2">
            <div className="ellipse-wrapper">
              <div className="ellipse" />
            </div>
            <div className="h-1-wrapper">
              <h1 className="h-1">Profil Jurusan</h1>
            </div>
            <NavNavbar
              className="nav-navbar-instance"
              navNavPropertyNavMenuClassName="design-component-instance-node"
              property1="with-avatar"
            />
            <SearchBar
              cariJurusanYangClassName="search-bar-2"
              className="search-bar-instance"
              property="medium"
              placeholder="Ilmu Hitam"
              value="Ilmu Hitam"
            />
          </div>
        </div>
      </div>
    );
  };