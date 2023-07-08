import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
// import { CareerPage } from "./pages/CareerPage/CareerPage"
// import { DetailBeasiswa } from "./pages/DetailBeasiswa/DetailBeasiswa"
import { DetailJurusan } from "./pages/DetailJurusan/DetailJurusan"
import { HomePages } from "./pages/HomePages/HomePages"
// import { LoginSuccessPages } from "./pages/LoginSuccessPages/LoginSuccessPages"
import { ProfilJurusan  } from "./pages/ProfilJurusan/ProfilJurusan"
// import { ProfilJurusanError } from "./pages/ProfilJurusanError/ProfilJurusanError";
 import { LoginPage } from "./pages/LoginPage/LoginPage"
// import { SignupPage } from "./pages/SignupPage/SignupPage"
import { ProfilJurusanView } from "./pages/ProfilJurusanView/ProfilJurusanView";
import {Beasiswa } from "./pages/Beasiswa/Beasiswa"
import { DetailBeasiswa } from "./pages/DetailBeasiswa/DetailBeasiswa";
// import { ProfilPenggunaSimpanBeasiswa } from "./pages/ProfilPenggunaSimpanBeasiswa/ProfilPenggunaSimpanBeasiswa"
// import { ProfilPenggunaEditPreferensi } from "./pages/ProfilPenggunaEditPreferensi/ProfilPenggunaEditPreferensi"
// import { ProfilPenggunaLihatPreferensi } from "./pages/ProfilPenggunaLihatPreferensi/ProfilPenggunaLihatPreferensi"
// import { ProfilPengguna } from "./pages/ProfilPengguna/ProfilPengguna"
import { OnDevelop } from "./pages/OnDevelop/OnDevelop";
// import { NavNavbar } from "./components/NavNavbar/NavNavbar"
// selalu hapus import code yang ingin dites dari direktori lain.

function App() {
  const current = window.location.pathname;
  return (
    <div className="App">
        {/* {!(current === '/login' || current === '/register') && <NavNavbar hasLoggedIn={false} avatar="" />} */}
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePages} />
            <Route path="/beasiswa/:nama_beasiswa" component={DetailBeasiswa} />
            <Route path="/beasiswa" component={Beasiswa} />
            <Route path="/jurusan/rumpun-:nama_rumpun" component={ProfilJurusanView} />
            <Route path="/jurusan/:nama_prodi" component={DetailJurusan} />
            <Route path="/jurusan" component={ProfilJurusan} />
            <Route path="/login" component={LoginPage} />
            <Route component={OnDevelop} />
          </Switch>
        </Router>
        {/* Mulai masukkan code yang ingin dites di bawah baris ini */}

        {/* <Beasiswa /> */}
        {/* DONE */}

        {/* <CareerPage/> */}
        {/* DONE */}

        {/* <DetailBeasiswa /> */}
        {/* DONE */}

        {/* <DetailJurusan/> */}
        {/* DONE  */}

        {/* <HomePages/> */}
        {/* WORK 80% */}

        {/* <LoginPage/> */}
        {/* DONE */}

        {/* <LoginSuccessPages/> */}
        {/* DONE */}

        {/* <SignupPage/>  */}
        {/* DONE */}

        {/* <ProfilJurusan/> */}
        {/* DONE  */}

        {/* <ProfilJurusanError/> */}
        {/* DONE  */}

        {/* <ProfilJurusanView /> */}
        {/* DONE */}

        {/* <ProfilPenggunaSimpanBeasiswa/>  */}
        {/* DONE */}

        {/* <ProfilPenggunaEditPreferensi/> */}
        {/* 80 %*/}

        {/* <ProfilPenggunaLihatPreferensi/> */}
        {/* DONE */}

        {/* <ProfilPengguna/> */}
        {/* DONE */}
      </header>
    </div>
  );
}

export default App;
