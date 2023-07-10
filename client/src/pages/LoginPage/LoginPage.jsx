import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/InputField/InputField";
import "./style.css";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { email, password } = formData;
    const errors = {};

    if (!email) errors.email = "Wajib mengisi email";
    if (!password) errors.password = "Wajib mengisi kata sandi";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleLogin = (event) => {
    event.preventDefault();
  
    if (validateForm()) {
      const { email, password } = formData;
  
      fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            console.log("Login success");
          } else if (response.status === 400) {
            return response.json().then((data) => {
              setErrors((prevErrors) => ({
                ...prevErrors,
                login: data.msg,
              }));
            });
          } else {
            setErrors((prevErrors) => ({
              ...prevErrors,
              login: "An error occurred. Please try again later.",
            }));
            console.log("Login failed");
          }
        })
        .catch((error) => {
          console.log(error);
        });
  
      setFormData({
        email: "",
        password: "",
      });
    }
  };  

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
              <br />
              <span className="span">SILAKAN MASUK UNTUK MELANJUTKAN</span>
            </h1>

            {errors.login && <mark>{errors.login}</mark>}

            <form id="login-form" onSubmit={handleLogin}>
              <InputField
                title="Email"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Silakan masukkan email..."
                onChange={handleInputChange}
                error={errors.email}
              />

              <InputField
                title="Kata Sandi"
                type="password"
                name="password"
                value={formData.password}
                placeholder="Silakan masukkan kata sandi..."
                onChange={handleInputChange}
                error={errors.password}
              />

              <div className="frame-2">
                <div className="rectangle-2" />
                <p className="ingat-untuk-hari">INGAT UNTUK&nbsp;&nbsp;30 HARI</p>
                <div className="text-wrapper-2">Lupa kata sandi?</div>
              </div>

              <Button className="login-button" property1="primary" text="Masuk" type="submit" />
            </form>

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
