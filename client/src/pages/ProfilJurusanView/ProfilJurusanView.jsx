import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { CardRumpun } from "../../components/CardRumpun/CardRumpun";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
// import "./style.css";

export const ProfilJurusanView = () => {
  const { nama_rumpun } = useParams();
  const [prodiData, setProdiData] = useState([]);

  useEffect(() => {
    fetch(`/api/profil-jurusan/rumpun-${nama_rumpun}`)
      .then((response) => response.json())
      .then((data) => setProdiData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="PROFIL-JURUSAN-VIEW">
      <div className="div">
        <div className="frame-2">
          <div className="ellipse-wrapper">
            <div className="ellipse" />
          </div>
          <div className="text-wrapper">{nama_rumpun.replace(/-/g, " ").toUpperCase()}</div>
          <div className="h-1-wrapper">
            <h1 className="h-1">Profil Jurusan</h1>
          </div>
          <NavNavbar
            className="nav-navbar-instance"
            navNavPropertyNavMenuClassName="design-component-instance-node"
            property1="with-avatar"
          />
        </div>

        <div id="list-rumpun">
          {prodiData.map((prodi) => (
            <CardRumpun
              key={prodi}
              className={`card-rumpun-${prodi.replace(/\s/g, "-").toLowerCase()}`}
              href={`${prodi.replace(/\s/g, "-").toLowerCase()}`}
              prodi={prodi}
              text={prodi}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
