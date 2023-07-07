  import React from "react";
  import { CardJurusan } from "../../components/CardJurusan/CardJurusan";
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
            <div className="card-jurusan-wrapper">
              <CardJurusan
                className="card-rumpun-instance"
                image="https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-uip163xcv6w-1@2x.png"
                description="Sistem informasi adalah ..."
              />
              <CardJurusan
                className="card-rumpun-instance"
                image="https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-uip163xcv6w-1@2x.png"
                description="Teknik Informatika adalah..."
              />
              <CardJurusan
                className="card-rumpun-instance"
                image="https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-uip163xcv6w-1@2x.png"
                description="Teknologi Informasi adalah..."
              />
              <CardJurusan
                className="card-rumpun-instance"
                image="https://generation-sessions.s3.amazonaws.com/da4e0e1008ef017d1ac917b5bcb034ff/img/unsplash-uip163xcv6w-1@2x.png"
                description="Sistem Komputer adalah..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
