import React from "react";
import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/InputField/InputField";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import { ProfilePicture } from "../../components/ProfilePicture/ProfilePicture";
import "./style.css";

export const ProfilPenggunaLihatPreferensi = () => {
  return (
    <div className="profil-pengguna-edit">
      <div className="div">
        <div className="overlap-group">
          <img
            className="image"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/4304da8fe0bbd3c3f66b6ffbdea1a83a/img/image-3.png"
          />
          <div className="frame-2">
            <ProfilePicture
              className="profile-picture-instance"
              property1="avatar-on-profile-page"
            />
            <div className="frame-3">
              <div className="frame-4">
                <h1 className="text-wrapper">Robert Downey</h1>
                <div className="text-wrapper-2">Boston University</div>
              </div>
              <img
                className="material-symbols"
                alt="Material symbols"
                src="https://generation-sessions.s3.amazonaws.com/4304da8fe0bbd3c3f66b6ffbdea1a83a/img/material-symbols-settings-outline.svg"
              />
            </div>
          </div>
        </div>
        <NavNavbar className="nav-navbar-instance" property1="with-avatar" />
        <div className="frame-5">
          <div className="frame-6">
            <div className="frame-7">
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
              src="https://generation-sessions.s3.amazonaws.com/4304da8fe0bbd3c3f66b6ffbdea1a83a/img/line-16.svg"
            />
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-5">Preferensi Beasiswa</div>
          </div>
          <div className="frame-8">
            <div className="frame-4">
              <div className="frame-9">
                <div className="text-wrapper-6">Jenjang</div>
              </div>
              <InputField
                className="input-field-instance"
                frameClassName="input-field-2"
                hasTitle={false}
                inputTextClassName="input-field-3"
                property="input-text"
                value="S1"
              />
            </div>
            <div className="frame-4">
              <div className="frame-9">
                <div className="text-wrapper-6"> Tipe Beasiswa</div>
              </div>
              <InputField
                className="input-field-instance"
                frameClassName="input-field-2"
                hasTitle={false}
                inputTextClassName="input-field-3"
                property="input-text"
                value="Beasiswa Penuh"
              />
            </div>
            <div className="frame-4">
              <div className="div-wrapper">
                <div className="text-wrapper-6">Negara Tujuan</div>
              </div>
              <InputField
                className="input-field-4"
                frameClassName="input-field-2"
                hasTitle={false}
                inputTextClassName="input-field-3"
                property="input-text"
                value="Belanda"
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
