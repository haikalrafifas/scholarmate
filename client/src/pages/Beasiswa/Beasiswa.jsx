

import React from "react";
import { CardBeasiswa } from "../../components/CardBeasiswa/CardBeasiswa";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "./style.css";

export const Beasiswa = () => {
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
        <SearchBar
          cariJurusanYangClassName="search-bar-2"
          className="search-bar-instance"
          property="panjang"
        />
		</div>
		<div className="search-results">
		  <div className="card-beasiswa-container">
			<CardBeasiswa degree="S1" country="Indonesia" />
			<CardBeasiswa degree="S1" country="Indonesia" />
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
            <div className="frame-10">
              <div className="ellipse-3" />
              <div className="text-wrapper-5">S1</div>
            </div>
            <div className="frame-10">
              <div className="ellipse-3" />
              <div className="text-wrapper-5">S2</div>
            </div>
            <div className="frame-10">
              <div className="ellipse-3" />
              <div className="text-wrapper-5">S3</div>
            </div>
          </div>
          <img
            className="vector-3"
            alt="Vector"
            src="https://generation-sessions.s3.amazonaws.com/17cf77a9f6c859392c2dcd3e1f3049e6/img/vector-3.svg"
          />
          <div className="frame-9">
            <div className="text-wrapper-4">Tipe Beasiswa</div>
            <div className="frame-11">
              <div className="ellipse-3" />
              <div className="text-wrapper-5">Beasiswa Sebagian</div>
            </div>
            <div className="frame-11">
              <div className="ellipse-3" />
              <div className="text-wrapper-6">Beasiswa Penuh</div>
            </div>
          </div>
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