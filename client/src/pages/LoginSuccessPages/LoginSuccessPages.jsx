import "./style.css";
import logo from "./Group.svg";
import Button from "../../components/Button/Button";

export const LoginSuccessPages = () => {
  const handleClick = () => {
    console.log("Button diklik!");
  };

  return (
    <div className="container">
      <div className="wrap">
        <div className="text-wrapper">
          <h1>PEMBUATAN AKUN BERHASIL</h1>
        </div>
        <div className="icon-wrapper">
          <img src={logo} alt="Logo" />
        </div>
        <div className="cont-wrapper">
          <h1>Klik Tombol Untuk Melanjutkan</h1>
        </div>
        <div className="button-wrapper">
          <Button text="masuk" property1="primary" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
