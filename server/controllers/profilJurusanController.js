const { Op } = require("sequelize");

const {
  ProgramStudi,
  Rumpun,
  RumpunProdi,
  TempatKuliah,
  Universitas,
  Karir,
  ProspekKarir
} = require("../models/profilJurusanModel");

// convert "slug-case" into "Title Case"
const slugToTitle = (slug) => {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const getAllRumpun = async (req, res) => {
  try {
    const rumpun = await Rumpun.findAll({
      attributes: ['nama_rumpun']
    });

    const result = rumpun.map((item) => item.nama_rumpun);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllProdiByRumpunName = async (req, res) => {
  const nama_rumpun = slugToTitle(req.params.nama_rumpun);

  try {
    // const prodi = await ProgramStudi.findAll({
    //   attributes: ['nama_prodi'],
    //   include: [
    //     {
    //       model: RumpunProdi,
    //       attributes: [],
    //       include: [
    //         {
    //           model: Rumpun,
    //           attributes: [],
    //           where: {
    //             nama_rumpun: nama_rumpun,
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // });

    // "select nama_rumpun from rumpun where nama_rumpun = :nama_rumpun"
    // const prodi = await Rumpun.findAll({
    //   attributes: ['nama_rumpun'],
    //   where: {
    //     nama_rumpun: nama_rumpun,
    //   },
    // });

    "select p.nama_prodi from rumpun_prodi rp join program_studi p on rp.prodi_id = p.prodi_id join rumpun r on rp.rumpun_id = r.rumpun_id where r.nama_rumpun = :nama_rumpun"
    const prodi = await RumpunProdi.findAll({
      attributes: [],
      include: [
        {
          model: ProgramStudi,
          attributes: ['nama_prodi'],
          include: [
            {
              model: Rumpun,
              attributes: [],
              where: {
                nama_rumpun: nama_rumpun,
              },
            },
          ],
        },
      ],
      where: {
        '$ProgramStudi.nama_prodi$': {
          [Op.ne]: null,
        },
      },
    });

    const result = prodi.map((item) => item.ProgramStudi.nama_prodi);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// const getAllProdiByRumpunId = async (req, res) => {
//   const id_rumpun = req.params.id_rumpun;

//   try {
//     const prodi = await ProgramStudi.findAll({
//       attributes: ["nama_prodi"],
//       include: [
//         {
//           model: RumpunProdi,
//           attributes: [],
//           where: {
//             rumpun_id: id_rumpun,
//           },
//         },
//         {
//           model: Rumpun,
//           attributes: ["nama_rumpun"],
//         },
//       ],
//     });

//     res.status(200).json(prodi);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getProdiDetail = async (req, res) => {
//   const id_prodi = req.params.id_prodi;

//   try {
//     const prodi = await ProgramStudi.findAll({
//       where: {
//         prodi_id: id_prodi,
//       },
//     });

//     res.status(200).json(prodi);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const getProdiDetail = async (req, res) => {
  const nama_prodi = slugToTitle(req.params.nama_prodi);

  try {
    const prodi = await ProgramStudi.findOne({
      where: {
        nama_prodi: nama_prodi,
      },
    });

    if ( !prodi ) return res.status(404).json({ error: "invalid request" });

    res.status(200).json(prodi);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTempatKuliahProdi = async (req, res) => {
  const nama_prodi = slugToTitle(req.params.nama_prodi);

  try {
    const tempatKuliah = await TempatKuliah.findAll({
      attributes: [],
      include: [
        {
          model: Universitas,
          attributes: ["nama_universitas"],
        },
        {
          model: ProgramStudi,
          attributes: [],
          where: {
            nama_prodi: nama_prodi,
          },
        },
      ],
    });

    const result = tempatKuliah.map((item) => item.Universita.nama_universitas);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

"select k.nama_profesi from prospek_karir pk join karir k on pk.karir_id=k.karir_id join program_studi p on pk.prodi_id=p.prodi_id where p.nama_prodi=:nama_prodi"
const getProspekJurusan = async (req, res) => {
  const nama_prodi = slugToTitle(req.params.nama_prodi);

  try {
    const prospek = await ProspekKarir.findAll({
      attributes: [],
      include: [
        {
          model: Karir,
          attributes: ['nama_profesi'],
          include: [
            {
              model: ProgramStudi,
              attributes: [],
              where: {
                nama_prodi: nama_prodi,
              },
            },
          ],
        },
      ],
      where: {
        '$Karir.nama_profesi$': {
          [Op.ne]: null,
        },
      },
    });

    const result = [...new Set(prospek.map(item => item.Karir.dataValues.nama_profesi))];
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getAllRumpun,
  // getAllProdiByRumpunId,
  getAllProdiByRumpunName,
  getProdiDetail,
  getTempatKuliahProdi,
  getProspekJurusan,
};
