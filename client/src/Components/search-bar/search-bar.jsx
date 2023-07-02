import PropTypes from "prop-types";
import React from "react";
import "./search-bar.css";

export const SearchBar = ({ property, className }) => {
  return (
    <div className={`search-bar ${property} ${className}`}>
      {property === "icon-kanan" && (
        <input
          type="text"
          className="cari-jurusan-yang"
          placeholder="Cari Jurusan yang ingin kamu ketahui...."
        />
      )}

      <img
        className="vector"
        alt="Vector"
        src="https://generation-sessions.s3.amazonaws.com/ea5e2b07dee31191070034b48ce22396/img/vector-5.svg"
      />
        {property === "medium" && (
          <input
            type="text"
            className="p"
            placeholder= "Cari Jurusan yang ingin kamu ketahui...."
          />
        )}

        {property === "panjang" && (
          <input
            type="text"
            className="long"
            placeholder= "Cari Beasiswa atau negara tujuan... "
          />
        )}
    </div>
  );
};

SearchBar.propTypes = {
  property: PropTypes.oneOf(["panjang", "icon-kanan", "medium"]),
};
  