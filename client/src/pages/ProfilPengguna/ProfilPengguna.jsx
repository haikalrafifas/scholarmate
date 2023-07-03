import React from "react";
import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/InputField/InputField";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import { ProfilePicture } from "../../components/ProfilePicture/ProfilePicture";
import "./style.css";

export const ProfilPengguna = () => {
  return (
    <div className="profil-pengguna">
      <div className="div">
        <NavNavbar className="nav-navbar-instance" property1="with-avatar" />
        <div className="overlap-group">
          <img
            className="image"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/5d17c1ea5e6b2661e118541d2f94c1ee/img/image-1.png"
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
                src="https://generation-sessions.s3.amazonaws.com/5d17c1ea5e6b2661e118541d2f94c1ee/img/material-symbols-settings-outline.svg"
              />
            </div>
          </div>
        </div>
        <div className="frame-5">
          <div className="frame-6">
            <div className="frame-7">
              <Button
                className="button-instance"
                labelClassName="design-component-instance-node"
                property1="primary"
                text="Detail Saya"
              />
              <div className="text-wrapper-3">Disimpan</div>
              <div className="text-wrapper-3">Preferensi</div>
            </div>
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/5d17c1ea5e6b2661e118541d2f94c1ee/img/line-16.svg"
            />
          </div>
          <div className="frame-8">
            <div className="frame-9">
              <InputField
                className="input-field-instance"
                frameClassName="input-field-2"
                inputTextClassName="input-field-3"
                property="input-text"
                title="Nama Lengkap"
                value="Robert Downey" // Atur nilai awal teks menggunakan defaultValue
              />
              <InputField
                className="input-field-instance"
                frameClassName="input-field-2"
                inputTextClassName="input-field-3"
                property="input-text"
                title="Alamat"
                type="text"
                value="Boston, USA" // Atur nilai awal teks menggunakan defaultValue
              />
            </div>
            <div className="frame-9">
              <InputField
                className="input-field-instance"
                frameClassName="input-field-2"
                inputTextClassName="input-field-3"
                property="input-text"
                title="Email"
                value="Robert@Downey.com" // Atur nilai awal teks menggunakan defaultValue
              />
              <InputField
                className="input-field-instance"
                frameClassName="input-field-2"
                inputTextClassName="input-field-3"
                property="input-text"
                title="Institusi"
                value="Boston University" // Atur nilai awal teks menggunakan defaultValue
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
