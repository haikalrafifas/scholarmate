import React from "react";
import "./style.css";

export const CardBeasiswa = ({ href, title, type, degree, country, registration_date, deadline_date }) => {
  const degrees = degree.split(",");
  const countries = country.split(",");

  return (
    <div className="card-beasiswa" onClick={() => {window.location.href = `/beasiswa/${href}`}}>
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
        <div className="tipe-beasiswa">{type}</div>
        <div className="nama-beasiswa">{title}</div>
      </div>
      <div className="frame-4">
        <div className="frame-5">
          <div className="text-wrapper">Pendaftaran Dibuka</div>
          <div className="DD-MM-YYYY">{registration_date}</div>
        </div>
        <div className="frame-5">
          <div className="text-wrapper">Pendaftaran Ditutup</div>
          <div className="DD-MM-YYYY">{deadline_date}</div>
        </div>
      </div>
    </div>
  );
};
