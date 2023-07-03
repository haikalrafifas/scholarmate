import React from "react";
import { Accordion } from "../../components/Accordion/Accordion";
import { Button } from "../../components/Button/Button";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import { ProfilePicture } from "../../components/ProfilePicture/ProfilePicture";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "./style.css";

export const ProfilPenggunaEditPreferensi = () => {
  return (
    <div className="profil-pengguna-edit">
      <div className="div">
        <div className="overlap-group">
          <img
            className="image"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/6a8f44c3e7137a025d1bf401f6fa5524/img/image-3.png"
          />
          <div className="frame">
            <ProfilePicture
              className="profile-picture-instance"
              property1="avatar-on-profile-page"
            />
            <div className="frame-2">
              <div className="frame-3">
                <h1 className="h-1">Robert Downey</h1>
                <div className="text-wrapper-2">Boston University</div>
              </div>
              <img
                className="material-symbols"
                alt="Material symbols"
                src="https://generation-sessions.s3.amazonaws.com/6a8f44c3e7137a025d1bf401f6fa5524/img/material-symbols-settings-outline.svg"
              />
            </div>
          </div>
        </div>
        <NavNavbar className="nav-navbar-instance" property1="with-avatar" />
        <div className="frame-4">
          <div className="frame-5">
            <div className="frame-6">
              <div className="text-wrapper-3">Detail Saya</div>
              <div className="text-wrapper-4">Disimpan</div>
              <Button
                className="button-instance"
                labelClassName="design-component-instance-node"
                property1="primary"
                text="Preferensi"
              />
            </div>
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/6a8f44c3e7137a025d1bf401f6fa5524/img/line-16.svg"
            />
          </div>
          <div className="frame-7">
            <div className="text-wrapper-5">Edit Preferensi</div>
          </div>
          <div className="frame-8">
            <div className="frame-3">
              <div className="div-wrapper">
                <div className="text-wrapper-6"> Pilih Jenjang</div>
              </div>
              <Accordion
                className="accordion-instance"
                groupClassName="accordion-4"
                headlineAndIconOfClassName="accordion-2"
                headlineClassName="accordion-3"
                stateProp="closed"
                text="S1"
                vector="https://generation-sessions.s3.amazonaws.com/6a8f44c3e7137a025d1bf401f6fa5524/img/vector-2-2.svg"
              />
            </div>
            <div className="frame-3">
              <div className="div-wrapper">
                <div className="text-wrapper-6"> Pilih Tipe Beasiswa</div>
              </div>
              <Accordion
                className="accordion-instance"
                groupClassName="accordion-6"
                headlineAndIconOfClassName="accordion-2"
                headlineClassName="accordion-5"
                stateProp="closed"
                text="Beasiswa Penuh"
                vector="https://generation-sessions.s3.amazonaws.com/6a8f44c3e7137a025d1bf401f6fa5524/img/vector-2-2.svg"
              />
            </div>
            <div className="frame-3">
              <div className="frame-7">
                <p className="text-wrapper-6">PIlih atau Ketik Negara Tujuan</p>
              </div>
              <SearchBar
                className="search-bar-instance"
                property="icon-kanan"
                text="Belanda"
                vectorClassName="search-bar-2"
              />
            </div>
          </div>
          <Button
            className="button-2"
            labelClassName="button-3"
            property1="primary"
            text="SIMPAN"
          />
        </div>
      </div>
    </div>
  );
};
