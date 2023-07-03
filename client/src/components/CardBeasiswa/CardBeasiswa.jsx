import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CardBeasiswa = ({ degree, country }) => {
  const degrees = degree.split(",");
  const countries = country.split(",");

  return (
    <div className="card-beasiswa">
      <div className="frame">
        {degrees.map((degrees, index) => (
          <label key={index} className="button-3">
            {degrees}
          </label>
        ))}

        {countries.map((countries, index) => (
          <label key={index} className="button-3">
            {countries}
          </label>
        ))}

        <div className="frame-2">
          <div className="ellipse" />
          <img
            className="vector"
            alt="Save Beasiswa"
            src="https://unpkg.com/@fortawesome/fontawesome-free@5.15.3/svgs/regular/bookmark.svg"
          />
        </div>
      </div>
      <div className="frame-3">
        <div className="tipe-beasiswa">Tipe Beasiswa</div>
        <div className="nama-beasiswa">Nama Beasiswa</div>
      </div>
      <div className="frame-4">
        <div className="frame-5">
          <div className="text-wrapper">Pendaftaran Dibuka</div>
          <div className="DD-MM-YYYY">DD-MM-YYYY</div>
        </div>
        <div className="frame-5">
          <div className="text-wrapper">Pendaftaran Ditutup</div>
          <div className="DD-MM-YYYY">DD-MM-YYYY</div>
        </div>
      </div>
    </div>
  );
};

CardBeasiswa.propTypes = {
  degree: PropTypes.string.isRequired,
};
