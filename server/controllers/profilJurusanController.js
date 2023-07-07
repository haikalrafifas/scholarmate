const {
  ProgramStudi,
  Rumpun,
  RumpunProdi,
  TempatKuliah,
  Universitas,
} = require("../models/profilJurusanModel");

const getAllRumpun = async (req, res) => {
  try {
    const rumpun = await Rumpun.findAll();

    res.status(200).json(rumpun);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllProdiByRumpunId = async (req, res) => {
  const id_rumpun = req.params.id_rumpun;

  try {
    const prodi = await ProgramStudi.findAll({
      attributes: ["nama_prodi"],
      include: [
        {
          model: RumpunProdi,
          attributes: [],
          where: {
            rumpun_id: id_rumpun,
          },
        },
        {
          model: Rumpun,
          attributes: ["nama_rumpun"],
        },
      ],
    });

    res.status(200).json(prodi);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProdiDetail = async (req, res) => {
  const id_prodi = req.params.id_prodi;

  try {
    const prodi = await ProgramStudi.findAll({
      where: {
        prodi_id: id_prodi,
      },
    });

    res.status(200).json(prodi);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTempatKuliahProdi = async (req, res) => {
  const id_prodi = req.params.id_prodi;

  try {
    const tempatKuliah = await ProgramStudi.findAll({
      attributes: ["nama_prodi"],
      include: [
        {
          model: Universitas,
          attributes: ["nama_universitas"],
        },
        {
          model: TempatKuliah,
          attributes: [],
          where: {
            prodi_id: id_prodi,
          },
        },
      ],
    });

    res.status(200).json(tempatKuliah);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllRumpun,
  getAllProdiByRumpunId,
  getProdiDetail,
  getTempatKuliahProdi,
};
