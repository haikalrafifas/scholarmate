import React from "react";
import { Button } from "../../components/Button/Button";
import { CardBeasiswa } from "../../components/CardBeasiswa/CardBeasiswa";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import { ProfilePicture } from "../../components/ProfilePicture/ProfilePicture";
import "./style.css";

export const ProfilPenggunaSimpanBeasiswa = () => {
  return (
    <div className="profil-pengguna">
      <div className="div-2">
        <div className="overlap-group">
          <img
            className="image"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/194e5d503b2df9bda173a552a062aded/img/image-2.png"
          />
          <div className="frame-6">
            <ProfilePicture
              className="profile-picture-instance"
              property1="avatar-on-profile-page"
            />
            <div className="frame-7">
              <div className="frame-8">
                <h1 className="h-1">Robert Downey</h1>
                <div className="text-wrapper-2">Boston University</div>
              </div>
              <img
                className="material-symbols"
                alt="Material symbols"
                src="https://generation-sessions.s3.amazonaws.com/194e5d503b2df9bda173a552a062aded/img/material-symbols-settings-outline.svg"
              />
            </div>
          </div>
        </div>
        <NavNavbar className="nav-navbar-instance" property1="with-avatar" />
        <div className="frame-9">
          <div className="frame-10">
            <div className="frame-11">
              <div className="text-wrapper-3">Detail Saya</div>
              <Button
                className="design-component-instance-node"
                labelClassName="button-4"
                property1="primary"
                text="Disimpan"
              />
              <div className="text-wrapper-4">Preferensi</div>
            </div>
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/194e5d503b2df9bda173a552a062aded/img/line-16.svg"
            />
          </div>
          <div className="frame-12">
            <CardBeasiswa
              degree="S1"
              country="Indonesia"
              vector="https://generation-sessions.s3.amazonaws.com/194e5d503b2df9bda173a552a062aded/img/vector-3.svg"
            />
            <CardBeasiswa
              degree="S1"
              country="Singapore"
              vector="https://generation-sessions.s3.amazonaws.com/194e5d503b2df9bda173a552a062aded/img/vector-3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
