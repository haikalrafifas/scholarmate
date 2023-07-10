import React, { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Footer } from "../../components/Footer/Footer";
import "./style.css"

export const ProfilJurusanError = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();
  const location = useLocation();

  const handleSearch = (event) => {
    event.preventDefault();
    const formattedSearchTerm = searchTerm.replace(/\s/g, '-');
    const url = `/jurusan/${formattedSearchTerm}`;
    history.push(url);
    setSearchTerm('');
    window.location.reload();
  };

    return (
      <>
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
            <form onSubmit={handleSearch}>
              <SearchBar
                cariJurusanYangClassName="search-bar-2"
                className="search-bar-instance"
                property="medium"
                onChange={(e) => setSearchTerm(e.target.value)}
                type="submit"
                placeholder={location.pathname.split('/')[2]}
              />
            </form>
          </div>
        </div>
      </div>
      <div style={{width: '100%'}}><Footer /></div>
      </>
    );
  };