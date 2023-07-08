import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SearchBar = ({ property, className, name, value, onChange }) => {
  return (
    <div className={`search-bar ${property} ${className} ${value}`}>
      {property === "icon-kanan" && (
        <input
          type="text"
          className="cari-jurusan-yang"
          placeholder="Cari Jurusan yang ingin kamu ketahui...."
          value={value}
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
          className="cari-jurusan-yang"
          placeholder="Cari Jurusan yang ingin Kamu ketahui..."
          value={value}
          onChange={onChange}
        />
      )}

      {property === "panjang" && (
        <input
          type="text"
          className="long"
          placeholder="Cari Beasiswa atau negara tujuan... "
          name={name}
          value={value}
        />
      )}
    </div>
  );
};

SearchBar.propTypes = {
  property: PropTypes.oneOf(["panjang", "icon-kanan", "medium"]),
};

SearchBar.defaultProps = {
  onChange: () => {},
};
