import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Accordion } from "../../components/Accordion/Accordion";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import { ProfilJurusanError } from "../ProfilJurusanError/ProfilJurusanError";
import { Footer } from "../../components/Footer/Footer";
import "./style.css";

export const DetailJurusan = () => {
  const { nama_prodi } = useParams();
  const [prodiData, setProdiData] = useState([]);
  const [prospekData, setProspekData] = useState([]);
  const [tempatKuliahData, setTempatKuliahData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodiResponse, prospekResponse, tempatKuliahResponse] = await Promise.all([
          fetch(`/api/profil-jurusan/${nama_prodi}`).then(response => {
            if (!response.ok) {
              setIsError(true);
              throw new Error("Error fetching data");
            }
            return response.json();
          }),
          fetch(`/api/profil-jurusan/prospek-${nama_prodi}`).then(response => response.json()),
          fetch(`/api/profil-jurusan/tempat-kuliah-${nama_prodi}`).then(response => response.json())
        ]);

        setProdiData(prodiResponse);
        setProspekData(prospekResponse);
        setTempatKuliahData(tempatKuliahResponse);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [nama_prodi]);

  if (isLoading) {
    return <div className="DETAIL-PROFIL" style={{color:"red"}}>Loading...</div>
  }

  if (isError) {
    return <ProfilJurusanError />;
  }

  return (
    <>
    <div className="DETAIL-PROFIL">
      <div className="div">
        <div className="overlap-group">
          <p className="section-prospek">Section 4 ( Prospek karir{"{"}hyperlink{"}"} )</p>
        </div>
        <img
          className="vector-2"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/40c9c06088ec9a7a2bb827ee65c0033d/img/vector-1@2x.png"
        />
        <div className="frame">
          <Accordion title="Informasi Jurusan" text={<div dangerouslySetInnerHTML={{ __html: prodiData.informasi_prodi }} />} />
          <Accordion title="Gambaran Mata Kuliah" text={<div dangerouslySetInnerHTML={{ __html: prodiData.gambaran_matkul }} />} />
          <Accordion title="Tempat Kuliah" text={tempatKuliahData} />
          <Accordion title="Prospek Lulusan" text={prospekData} />
        </div>
        <div className="frame-2">
          <div className="ellipse-wrapper">
            <div className="ellipse" />
          </div>
          <div className="h-1-wrapper" align="center">
            <h1 className="h-1">
              {nama_prodi.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} <br />
            </h1>
          </div>
          {/* <h1 className="text-wrapper">{nama_prodi.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1> */}
          <p className="p">Temukan informasi mengenai jurusan ini</p>
          <NavNavbar
            className="nav-navbar-instance"
            logoLogoClassName="design-component-instance-node"
            property1="with-avatar"
          />
        </div>
      </div>
    </div>
    <div style={{width: '100%'}}><Footer /></div>
    </>
  );
};
