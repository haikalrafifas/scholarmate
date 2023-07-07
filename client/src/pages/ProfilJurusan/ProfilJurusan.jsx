import React from "react";
import { CardRumpun } from "../../components/CardRumpun/CardRumpun";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "./style.css";

export const ProfilJurusan = () => {
  return (
    <div className="PROFIL-JURUSAN-VIEW">
      <div className="div">
        <div className="p-wrapper">
          <p className="p">
            Apabila Kamu membaca profil jurusan, Kamu akan menemukan informasi
            yang dapat membantu kamu dalam menentukan jurusan yang dituju
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
          />
        </div>
        <CardRumpun
          className="card-rumpun-ilmu"
          namaRumpun="ilmu-komputer"
          text={
            <>
              RUMPUN
              <br />
              ILMU
              <br />
              KOMPUTER
            </>
          }
        />
        <CardRumpun
          className="card-rumpun-instance"
          namaRumpun="kedokteran"
          text={
            <>
              RUMPUN
              <br />
              KESEHATAN
            </>
          }
        />
        <CardRumpun
          className="card-rumpun-hukum"
          namaRumpun="hukum"
          text={
            <>
              RUMPUN
              <br />
              HUKUM
            </>
          }
        />
        <CardRumpun
          className="card-rumpun-teknik"
          namaRumpun="teknik"
          text={
            <>
              RUMPUN
              <br />
              TEKNIK
            </>
          }
        />
        <CardRumpun
          className="card-rumpun-ekonomi"
          namaRumpun="ekonomi-bisnis"
          text={
            <>
              RUMPUN
              <br />
              EKONOMI BISNIS
            </>
          }
        />
      </div>
    </div>
  );
};
