import React from "react";
import { Button } from "../../components/Button/Button";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import "./style.css";

export const DetailBeasiswa = () => {
  return (
    <div className="beasiswa-detail">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">Mulai Pendaftaran</div>
            <div className="text-wrapper-2">Tenggat Pendaftaran</div>
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/a0b320ab2f26394c7ac6748ea00e2007/img/line-23.svg"
            />
            <div className="text-wrapper-3">22 Januari 2023</div>
            <div className="text-wrapper-4">22 Maret 2023</div>
          </div>
        </div>
        <div className="frame">
          <div className="frame-2">
            <div className="text-wrapper-5">Tentang Beasiswa</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-6">Deskripsi</div>
            <p className="text-wrapper-7">
              Beasiswa BidikMisi untuk jenjang S1 dengan
              tipe Fully Funded
            </p>
          </div>
          <img
            className="img"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/a0b320ab2f26394c7ac6748ea00e2007/img/line-24.svg"
          />
          <div className="frame-4">
            <div className="text-wrapper-6">Universitas</div>
            <div className="text-wrapper-7">Delft University of Technology</div>
          </div>
          <img
            className="img"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/a0b320ab2f26394c7ac6748ea00e2007/img/line-26.svg"
          />
          <div className="frame-5">
            <div className="text-wrapper-6">Jurusan</div>
            <div className="text-wrapper-7">
              Computer Science and Engineering
            </div>
          </div>
          <img
            className="img"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/a0b320ab2f26394c7ac6748ea00e2007/img/line-25.svg"
          />
          <div className="frame-6">
            <div className="tautan-pendaftaran">
              Tautan <br />
              Pendaftaran
            </div>
            <div className="dapat-di-klik-disini">
              <span className="span">Dapat di klik </span>
              <a
                href="https://www.schoters.com/id/beasiswa/info/adb-jsp-school-of-international-health-the-university-of-tokyo-s2-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-wrapper-8">disini</span>
              </a>
            </div>
          </div>
        </div>
        <NavNavbar className="nav-navbar-instance" property1="with-avatar" />
        <div className="frame-7">
          <div className="frame-8">
            <h1 className="h-1">BidikMisi</h1>
            <Button
              className="button-instance"
              deviconGoogleClassName="design-component-instance-node"
              property1="with-logo-right"
              text="Simpan"
              vector="https://generation-sessions.s3.amazonaws.com/a0b320ab2f26394c7ac6748ea00e2007/img/vector-1.svg"
            />
          </div>
          <div className="frame-9">
            <div className="text-wrapper-9">Fully funded</div>
            <div className="div-wrapper">
              <div className="text-wrapper-10">S1</div>
            </div>
            <div className="frame-10">
              <div className="text-wrapper-10">Belanda</div>
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="frame-12">
            <div className="text-wrapper-11">Keuntungan</div>
          </div>
          <div className="uang-saku-hingga-rp-wrapper">
            <p className="p">
              Uang saku hingga Rp 8.000.000,-
              <br />
              Asuransi kesehatan
              <br />
              Mendapat potongan UKT sebesar 50%
            </p>
          </div>
        </div>
        <div className="frame-13">
          <div className="frame-2">
            <div className="text-wrapper-5">Syarat-syarat</div>
          </div>
          <div className="frame-2">
            <p className="text-wrapper-7">Tidak boleh melebihi 25 tahun</p>
          </div>
          <img
            className="line-2"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/a0b320ab2f26394c7ac6748ea00e2007/img/line-27.svg"
          />
          <div className="frame-2">
            <div className="text-wrapper-7">Minimum IPK &gt; 3,5</div>
          </div>
          <img
            className="line-2"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/a0b320ab2f26394c7ac6748ea00e2007/img/line-28.svg"
          />
          <div className="frame-2">
            <p className="p">
              IELTS (Tidak ada skor minimum)
              <br />
              TOEFL (Tidak ada skor minimum)
            </p>
          </div>
          <img
            className="line-2"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/a0b320ab2f26394c7ac6748ea00e2007/img/line-29.svg"
          />
          <div className="frame-2">
            <p className="p">
              Foto terbaru (Portrait)
              <br />
              Paspor
              <br />
              Form Pendaftaran Beasiswa
              <br />
              Bukti kemahiran berbahasa Inggrus
              <br />
              Sertifikat penghasilan Orangtua
              <br />
              Transkrip akademik
              <br />
              Form Evaluasi Diri
              <br />
              Sertifikat Kesehatan
            </p>
          </div>
          <img
            className="line-2"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/a0b320ab2f26394c7ac6748ea00e2007/img/line-30.svg"
          />
          <div className="frame-2">
            <div className="text-wrapper-7">Kewarganegaraan Indonesia</div>
          </div>
        </div>
      </div>
    </div>
  );
};
