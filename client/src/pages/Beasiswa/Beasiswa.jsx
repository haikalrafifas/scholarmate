import React, { useState, useEffect } from "react";
import { CardBeasiswa } from "../../components/CardBeasiswa/CardBeasiswa";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { RadioFilter } from "../../components/RadioFilter/RadioFilter";
import "./style.css";

export const Beasiswa = () => {
  const [beasiswaData, setBeasiswaData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleFilter = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    const Appliedfilters = selectedOptions.filter((option) => option.name !== name);
    setSelectedOptions([...Appliedfilters, { name, value }]);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // const search = searchTerm/*.replace(/\s/g, '-')*/;
    const value = event.target.value;
    const name = event.target.name;

    const Appliedfilters = selectedOptions.filter((option) => option.name !== name);
    setSelectedOptions([...Appliedfilters, { name, value }]);

    // const url = `//${formattedSearchTerm}`;
    // history.push(url);
    // setSearchTerm('');
  };

  useEffect(() => {
    const queryParams = selectedOptions
      .map((option) => `${option.name}=${option.value}`)
      .join("&");

    fetch(`/api/scholarships?${queryParams}&preview=true`)
      .then((response) => response.json())
      .then((data) => setBeasiswaData(data))
      .catch((error) => console.log(error));
  }, [selectedOptions]);

  return (
    <div className="beasiswa">
      <div className="div-2">
        <div className="frame-6">
          <div className="ellipse-2" />
          <p className="p">Cari beasiswa untuk menjunjung edukasi</p>
          <NavNavbar
            className="nav-navbar-instance"
            logoLogoClassName="design-component-instance-node"
            property1="with-avatar"
          />
          <NavNavbar 
          className="nav-navbar-instance" 
          property1="with-avatar"
          />
          <h1 className="h-1">BEASISWA</h1>
        </div>
		<div className="search-bar-container">
      <form onSubmit={handleSearch}>
        <SearchBar
          cariJurusanYangClassName="search-bar-2"
          className="search-bar-instance"
          property="panjang"
          name="keyword"
        />
      </form>
		</div>
		<div className="search-results">
		  <div className="card-beasiswa-container">
      {beasiswaData.map((beasiswa) => (
			  <CardBeasiswa
          href={beasiswa.slug}
          title={beasiswa.nama_beasiswa}
          type={beasiswa.tipe_beasiswa}
          degree={beasiswa.tingkat_pendidikan}
          country={beasiswa.negara_tujuan}
          registration_date={beasiswa.tanggal_mulai_daftar}
          deadline_date={beasiswa.tanggal_akhir_daftar}
        />
      ))}
		  </div>
		</div>
        <div className="frame-7">
          <div className="frame-8">
            <div className="text-wrapper-3">Filter</div>
            <img
              className="vector-2"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/17cf77a9f6c859392c2dcd3e1f3049e6/img/vector-2.svg"
            />
          </div>
          <img
            className="vector-3"
            alt="Vector"
            src="https://generation-sessions.s3.amazonaws.com/17cf77a9f6c859392c2dcd3e1f3049e6/img/vector-3.svg"
          />

          <div className="frame-9">
            <div className="text-wrapper-4">Jenjang</div>
            <RadioFilter title="S1" name="degree" value="s1" onChange={handleFilter} />
            <RadioFilter title="S2" name="degree" value="s2" onChange={handleFilter} />
            <RadioFilter title="S3" name="degree" value="s3" onChange={handleFilter} />
          </div>

          <div className="frame-9">
            <div className="text-wrapper-4">Tipe Beasiswa</div>
            <RadioFilter title="Beasiswa Sebagian" name="tipe" value="partial" onChange={handleFilter} />
            <RadioFilter title="Beasiswa Penuh" name="tipe" value="fully funded" onChange={handleFilter} />
          </div>

          <img
            className="vector-3"
            alt="Vector"
            src="https://generation-sessions.s3.amazonaws.com/17cf77a9f6c859392c2dcd3e1f3049e6/img/vector-3.svg"
          />
          
          <img
            className="vector-4"
            alt="Vector"
            src="https://generation-sessions.s3.amazonaws.com/17cf77a9f6c859392c2dcd3e1f3049e6/img/vector-3.svg"
          />
        </div>
      </div>
    </div>
  );
};