import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { CardRumpun } from "../../components/CardRumpun/CardRumpun";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "./style.css";

export const ProfilJurusan = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rumpunData, setRumpunData] = useState([]);
  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    const formattedSearchTerm = searchTerm.replace(/\s/g, '-');
    const url = `/jurusan/${formattedSearchTerm}`;
    history.push(url);
    setSearchTerm('');
  };

  useEffect(() => {
    fetch('/api/profil-jurusan')
      .then((response) => response.json())
      .then((data) => setRumpunData(data))
      .catch((error) => console.log(error));
  }, []);

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
          <form onSubmit={handleSearch}>
          <SearchBar
            cariJurusanYangClassName="search-bar-2"
            className="search-bar-instance"
            property="medium"
            onChange={(e) => setSearchTerm(e.target.value)}
            type="submit"
          />
          </form>
        </div>

        {rumpunData.map((rumpun) => (
          <CardRumpun
            key={rumpun}
            className={`card-rumpun-${rumpun.replace(/\s/g, "-").toLowerCase()}`}
            href={`rumpun-${rumpun.replace(/\s/g, "-").toLowerCase()}`}
            rumpun={rumpun}
            text={
              <>
                RUMPUN <br /> {rumpun}
              </>
            }
          />
        ))}

      </div>
    </div>
  );
};
