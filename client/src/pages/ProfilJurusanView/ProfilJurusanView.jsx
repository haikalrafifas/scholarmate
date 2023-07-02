import React from "react";
import { CardRumpun } from "../../components/CardRumpun/CardRumpun";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import "./style.css";

export const ProfilJurusanView = () => {
  return (
    <div className="PROFIL-JURUSAN-VIEW">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="div">
              <div className="ellipse" />
              <div className="text-wrapper">RUMPUN ILMU KOMPUTER</div>
              <h1 className="h-1">Profil Jurusan</h1>
              <NavNavbar
                className="nav-navbar-instance"
                logoLogoClassName="design-component-instance-node"
                property1="with-avatar"
              />
            </div>
          </div>
          <CardRumpun
            className="card-rumpun-instance"
            namaRumpun="ilmu-komputer"
            text="TEKNIK INFORMATIKA"
          />
          <CardRumpun
            className="card-rumpun-2"
            namaRumpun="ilmu-komputer"
            text="SISTEM INFORMASI"
          />
          <CardRumpun
            className="card-rumpun-3"
            namaRumpun="ilmu-komputer"
            text="TEKNIK KOMPUTER"
          />
          <CardRumpun
            className="card-rumpun-4"
            namaRumpun="ilmu-komputer"
            text="TEKNOLOGI INFORMASI"
          />
        </div>
      </div>
    </div>
  );
};
