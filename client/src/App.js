import React from "react";
import "./App.css";
import { InputField } from "./Components/form-input/form-input";
import { SearchBar } from "./Components/search-bar/search-bar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputField property="input-text" className="input-password" />
        <InputField property="password" className="input-password" />
        <SearchBar className="search-bar-instance" property="medium" />
        <SearchBar className="design-component-instance-node" property="icon-kanan" />
        <SearchBar className="property-panjang-2" property="panjang" />
      </header>
    </div>
  );
}

export default App;
