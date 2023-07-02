import React from "react";
import "./App.css";
import { DetailBeasiswa } from "./pages/DetailBeasiswa/DetailBeasiswa";
// selalu hapus import code yang ingin dites dari direktori lain.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Mulai masukkan code yang ingin dites di bawah baris ini */}
        <DetailBeasiswa />
      </header>
    </div>
  );
}

export default App;
