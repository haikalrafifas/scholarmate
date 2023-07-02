import React from "react";
import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/InputField/InputField";
import "./style.css";

export const LoginPage = () => {
  return (
    <div className="LOGIN">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <img
            className="img"
            alt="Scholarship Image"
            src="https://d3tc5xafqqxqk8.cloudfront.net/wp-content/uploads/2020/11/04153600/shutterstock_767158405.jpg"
          />
          <div className="div">
            <h1 className="selamat-DATANG">
              <span className="text-wrapper">SELAMAT DATANG</span>
              <br/>
              <span className="span">SILAKAN MASUK UNTUK MELANJUTKAN</span>
            </h1>

            <InputField title="Email" type="email" placeholder="Silakan masukkan email..." />

            <InputField title="Kata Sandi" type="password" placeholder="Silakan masukkan kata sandi..." />

            <div className="frame-2">
              <div className="rectangle-2" />
              <p className="ingat-untuk-hari">INGAT UNTUK&nbsp;&nbsp;30 HARI</p>
              <div className="text-wrapper-2">Lupa kata sandi?</div>
            </div>

            <Button className="login-button" property1="primary" text="Masuk" />

            <div className="frame-3">
              <p className="belum-punya-akun">
                <span className="text-wrapper">Belum punya akun? </span>
                <span className="text-wrapper-3">Daftar disini</span>
              </p>
              <div className="text-wrapper-4">Atau</div>
            </div>

            <Button className="button-3" property1="with-logo-left" text="Masuk dengan Google" />
          </div>
        </div>
      </div>
    </div>
  );
};
