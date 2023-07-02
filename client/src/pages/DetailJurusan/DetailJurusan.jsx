import React from "react";
import { Accordion } from "../../components/Accordion/Accordion";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import "./style.css";

export const DetailJurusan = () => {
  return (
    <div className="DETAIL-PROFIL">
      <div className="div">
        <div className="overlap-group">
          <p className="section-prospek">
            section 4 ( Prospek karir{"{"}hyperlink{"}"} )
          </p>
        </div>
        <img
          className="vector-2"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/40c9c06088ec9a7a2bb827ee65c0033d/img/vector-1@2x.png"
        />
        <div className="frame">
          <Accordion stateProp="closed" text="Tes test" />
          <Accordion stateProp="closed" text="Gambaran Mata Kuliah" />
          <Accordion stateProp="closed" text="Tempat Kuliah" />
          <Accordion stateProp="closed" text="Prospek Lulusan" />
        </div>
        <div className="frame-2">
          <div className="ellipse" />
          <h1 className="text-wrapper">Sistem Informasi</h1>
          <p className="p">Temukan informasi mengenai jurusan ini</p>
          <NavNavbar
            className="nav-navbar-instance"
            logoLogoClassName="design-component-instance-node"
            property1="with-avatar"
          />
        </div>
      </div>
    </div>
  );
};
