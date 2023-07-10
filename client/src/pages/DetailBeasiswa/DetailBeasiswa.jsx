import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Button } from "../../components/Button/Button";
import { NavNavbar } from "../../components/NavNavbar/NavNavbar";
import "./style.css";

export const DetailBeasiswa = () => {
  const { nama_beasiswa } = useParams();
  const [beasiswaData, setBeasiswaData] = useState([]);

  const timestampToDate = (timestamp) => {
    if ( timestamp === null ) return "N/A";
    const date = new Date(timestamp);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    fetch(`/api/scholarships/${nama_beasiswa}`)
      .then((response) => response.json())
      .then((data) => setBeasiswaData(data))
      .catch((error) => console.log(error));
  }, [nama_beasiswa]);

  if ( beasiswaData === null ) return (
    <div style={{color: 'red'}}>
      Halaman Tidak Ditemukan! <br/>
      <a href="/">Kembali ke halaman utama</a>
    </div>
  );

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
            <div className="text-wrapper-3">{timestampToDate(beasiswaData.tanggal_mulai_daftar)}</div>
            <div className="text-wrapper-4">{timestampToDate(beasiswaData.tanggal_akhir_daftar)}</div>
          </div>
        </div>
        <div className="frame">
          <div className="frame-2">
            <div className="text-wrapper-5">Tentang Beasiswa</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-6">Deskripsi</div>
            <p className="text-wrapper-7">
              Beasiswa {beasiswaData.nama_beasiswa} untuk jenjang {beasiswaData.tingkat_pendidikan} dengan
              tipe {beasiswaData.tipe_beasiswa}
            </p>
          </div>
          <img
            className="img"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/a0b320ab2f26394c7ac6748ea00e2007/img/line-24.svg"
          />
          <div className="frame-4">
            <div className="text-wrapper-6">Universitas</div>
            <div className="text-wrapper-7">{beasiswaData.pemberi_beasiswa}</div>
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
                href={beasiswaData.link_pendaftaran}
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
            <h1 className="h-1" align="left">{beasiswaData.nama_beasiswa}</h1>
            <Button
              className="button-instance"
              deviconGoogleClassName="design-component-instance-node"
              property1="with-logo-right"
              text="Simpan"
              vector="https://generation-sessions.s3.amazonaws.com/a0b320ab2f26394c7ac6748ea00e2007/img/vector-1.svg"
            />
          </div>
          <div className="frame-9">
            <div className="text-wrapper-9">{beasiswaData.tipe_beasiswa}</div>
            {beasiswaData.tingkat_pendidikan && beasiswaData.tingkat_pendidikan.split(',').map((tingkat_pendidikan) => (
              <div className="div-wrapper">
                <div className="text-wrapper-10">{tingkat_pendidikan}</div>
              </div>
            ))}
            <div className="frame-10">
              <div className="text-wrapper-10">{beasiswaData.negara_tujuan}</div>
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="frame-12">
            <div className="text-wrapper-11">Keuntungan</div>
          </div>
          <div className="uang-saku-hingga-rp-wrapper">
            <div className="p" dangerouslySetInnerHTML={{ __html: beasiswaData.keuntungan }}>
              {/* Uang saku hingga Rp 8.000.000,-
              <br />
              Asuransi kesehatan
              <br />
              Mendapat potongan UKT sebesar 50% */}
            </div>
          </div>
        </div>
        <div className="frame-13">
          <div className="frame-2">
            <div className="text-wrapper-5">Syarat-syarat</div>
          </div>

          {beasiswaData.persyaratan && beasiswaData.persyaratan.split(',').map((persyaratan) => (
            <>
              <div className="frame-2">
                <p className="text-wrapper-7">{persyaratan}</p>
              </div>
              <img
                className="line-2"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/a0b320ab2f26394c7ac6748ea00e2007/img/line-27.svg"
              />
            </>
          ))}


          {/* <div className="frame-2">
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
          </div> */}

        </div>
      </div>
    </div>
  );
};
