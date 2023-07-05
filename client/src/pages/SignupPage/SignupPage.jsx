import React from "react";
import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/InputField/InputField";
import "./style.css";

export const SignupPage = () => {
  return (
    <div className="SIGN-UP">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <img
            className="img"
            alt="Scholarship Image"
            src="https://d3tc5xafqqxqk8.cloudfront.net/wp-content/uploads/2020/11/04153600/shutterstock_767158405.jpg"
          />
          <div className="div">
            <h1 className="PEMBUATAN-AKUN">
              <span className="text-wrapper">PEMBUATAN AKUN</span>
              <br/>
              <span className="span">Daftar dan nikmati fitur kami</span>
            </h1>

            <InputField title="Email" type="email" placeholder="Silakan masukkan email..." />
            <InputField title="Nama Lengkap" type="text" placeholder="Silakan masukkan nama lengkap..." />
            <InputField title="Kata Sandi" type="password" placeholder="Silakan masukkan kata sandi..." />
            <InputField title="Konfirmasi Kata Sandi" type="password" placeholder="Silakan masukkan ulang kata sandi..." />


            <div className="frame-2">
              <div className="rectangle-2" />
              <p className="saya-SETUJU-dengan">SAYA SETUJU DENGAN SEMUA KETENTUAN DAN KEBIJAKAN PRIVASI</p>
            </div>

            <Button className="button-instance" property1="primary" text="DAFTAR" />

            <div className="sudah-punya-akun-wrapper">
              <p className="sudah-punya-akun">
                <span className="text-wrapper-2">Sudah punya akun? </span>
                <span className="text-wrapper-3">Masuk disini</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
