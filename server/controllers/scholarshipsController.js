const ScholarshipModel = require("../models/scholarshipsModel");
const { Op } = require("sequelize");

// const getScholarshipsInfo = async (req, res, next) => {
//   const { degree, negara_tujuan, tipe, urut_berdasarkan, slug, preview, keyword } = req.query;

  // if (degree && negara_tujuan && tipe && urut_berdasarkan) {
  //   return getScholarshipByDegreeAndCountryAndTypeAndOrderBy(req, res);
  // }

  // if (tipe && urut_berdasarkan) {
  //   return getScholarshipByTypeAndOrderBy(req, res);
  // }

  // if (negara_tujuan && urut_berdasarkan) {
  //   return getScholarshipByCountryAndOrderBy(req, res);
  // }

  // if (negara_tujuan && tipe) {
  //   return getScholarshipByCountryAndType(req, res);
  // }

  // if (degree && urut_berdasarkan) {
  //   return getScholarshipByDegreeAndOrderBy(req, res);
  // }

  // if (degree && tipe) {
  //   return getScholarshipByDegreeAndType(req, res);
  // }

  // if (degree && negara_tujuan) {
  //   return getScholarshipByDegreeAndCountry(req, res);
  // }

  // if (degree) {
  //   return getScholarshipByDegree(req, res);
  // }

  // if (negara_tujuan) {
  //   return getScholarshipByCountry(req, res);
  // }

  // if (tipe) {
  //   return getScholarshipByType(req, res);
  // }

  // if (slug) {
  //   return getScholarshipBySlug(req, res);
  // }

  // if (urut_berdasarkan) {
  //   return getScholarshipOrderBy(req, res);
  // }

//   if (preview) {
//     return getAllScholarshipPreview(req, res);
//   }

//   if (!degree && !negara_tujuan && !tipe) {
//     return getAllScholarships(req, res);
//   }
// };

// const getScholarshipByDegreeAndCountryAndTypeAndOrderBy = async (
//   req,
//   res,
//   next
// ) => {
//   const { degree, negara_tujuan, tipe, urut_berdasarkan } = req.query;

//   try {
//     let scholarships = await ScholarshipModel.findAll({
//       where: {
//         tingkat_pendidikan: {
//           [Op.like]: `%${degree}%`,
//         },
//         negara_tujuan: {
//           [Op.like]: `${negara_tujuan}%`,
//         },
//         tipe_beasiswa: {
//           [Op.like]: `${tipe}%`,
//         },
//       },
//       order: [[urut_berdasarkan, "DESC"]],
//     });

//     res.status(200).json(scholarships);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getScholarshipByTypeAndOrderBy = async (req, res, next) => {
//   const { tipe, urut_berdasarkan } = req.query;

//   try {
//     let scholarships = await ScholarshipModel.findAll({
//       where: {
//         tipe_beasiswa: {
//           [Op.like]: `%${tipe}%`,
//         },
//       },
//       order: [[urut_berdasarkan, "DESC"]],
//     });

//     res.status(200).json(scholarships);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getScholarshipByCountryAndOrderBy = async (req, res, next) => {
//   const { negara_tujuan, urut_berdasarkan } = req.query;

//   try {
//     let scholarships = await ScholarshipModel.findAll({
//       where: {
//         negara_tujuan: {
//           [Op.like]: `%${negara_tujuan}%`,
//         },
//       },
//       order: [[urut_berdasarkan, "DESC"]],
//     });
//     res.status(200).json(scholarships);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getScholarshipByCountryAndType = async (req, res, next) => {
//   const { negara_tujuan, tipe } = req.query;

//   try {
//     let scholarships = await ScholarshipModel.findAll({
//       where: {
//         negara_tujuan: {
//           [Op.like]: `%${negara_tujuan}%`,
//         },
//         tipe_beasiswa: {
//           [Op.like]: `%${tipe}%`,
//         },
//       },
//     });

//     return res.status(200).json(scholarships);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getScholarshipByDegreeAndOrderBy = async (req, res, next) => {
//   const { degree, urut_berdasarkan } = req.query;

//   try {
//     let scholarships = await ScholarshipModel.findAll({
//       where: {
//         tingkat_pendidikan: {
//           [Op.like]: `%${degree}%`,
//         },
//       },
//       order: [[urut_berdasarkan, "DESC"]],
//     });

//     return res.status(200).json(scholarships);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getScholarshipByDegreeAndType = async (req, res, next) => {
//   const { degree, tipe } = req.query;

//   try {
//     let scholarships = await ScholarshipModel.findAll({
//       where: {
//         tingkat_pendidikan: {
//           [Op.like]: `%${degree}%`,
//         },
//         tipe_beasiswa: {
//           [Op.like]: `%${tipe}%`,
//         },
//       },
//     });
//     return res.status(200).json(scholarships);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getScholarshipByDegreeAndCountry = async (req, res, next) => {
//   const { degree, negara_tujuan } = req.query;

//   try {
//     let scholarships = await ScholarshipModel.findAll({
//       where: {
//         negara_tujuan: {
//           [Op.like]: `%${negara_tujuan}%`,
//         },
//         tingkat_pendidikan: {
//           [Op.like]: `%${degree}%`,
//         },
//       },
//     });

//     return res.status(200).json(scholarships);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getScholarshipByDegree = async (req, res, next) => {
//   const { degree } = req.query;

//   try {
//     let scholarships = await ScholarshipModel.findAll({
//       where: {
//         tingkat_pendidikan: {
//           [Op.like]: `%${degree}%`,
//         },
//       },
//     });

//     return res.status(200).json(scholarships);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getScholarshipByCountry = async (req, res, next) => {
//   const { negara_tujuan } = req.query;

//   try {
//     let scholarships = await ScholarshipModel.findAll({
//       where: {
//         negara_tujuan: {
//           [Op.like]: `%${negara_tujuan}%`,
//         },
//       },
//     });

//     return res.status(200).json(scholarships);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getScholarshipByType = async (req, res, next) => {
//   const { tipe } = req.query;

//   try {
//     let scholarships = await ScholarshipModel.findAll({
//       where: {
//         tipe_beasiswa: {
//           [Op.like]: `%${tipe}%`,
//         },
//       },
//     });

//     return res.status(200).json(scholarships);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getScholarshipOrderBy = async (req, res, next) => {
//   const { urut_berdasarkan } = req.query;

//   try {
//     let scholarships = await ScholarshipModel.findAll({
//       order: [[urut_berdasarkan, "DESC"]],
//     });

//     return res.status(200).json(scholarships);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const getScholarshipDetail = async (req, res, next) => {
  try {
    const scholarship = await ScholarshipModel.findOne({ where: { slug: req.params.slug } });

    return res.status(200).json(scholarship);
  } catch (error) {
    console.log(error);
  }
}

const getScholarshipsInfo = async (req, res, next) => {
  // set default limit to 10 and max query limit to 100
  const limit = parseInt((req.query.limit && req.query.limit < 100) ? req.query.limit : 10);
  const page = parseInt(req.query.page || 1);
  const keyword = req.query.keyword || '';
  const degree = req.query.degree || '';
  const tipe = req.query.tipe || '';
  let where = {};

  const validSortColumns = ['tanggal_mulai_daftar','tanggal_akhir_daftar','jumlah_pencarian'];
  let sort = (req.query.urut_berdasarkan || 'tanggal_akhir_daftar,desc').split(',');
  if ( !validSortColumns.includes(sort[0]) ) sort = ['tanggal_akhir_daftar','desc'];

  if ( keyword ) {
    where = {
      [Op.or]: [
        { nama_beasiswa: { [Op.like]: `%${keyword}%` } },
        { negara_tujuan: { [Op.like]: `%${keyword}%` } },
      ]
    };
  }

  if ( degree ) where.tingkat_pendidikan = {[Op.like]: `%${degree}%`};

  if ( tipe ) where.tipe_beasiswa = {[Op.like]: `%${tipe}%`};
  
  try {
    const totalCount = await ScholarshipModel.count({ where });
    const totalPages = Math.ceil(totalCount / limit);

    const scholarships = await ScholarshipModel.findAll({
      attributes: [
      'slug','nama_beasiswa','negara_tujuan','tipe_beasiswa','tingkat_pendidikan',
      'tanggal_mulai_daftar','tanggal_akhir_daftar'
      ],
      where,
      limit,
      offset: (page - 1) * limit,
      order: [sort],
    });

    return res.status(200).json({
      totalCount,
      totalPages,
      currentPage: page,
      scholarships,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllScholarships = async (req, res, next) => {
  try {
    const scholarships = await ScholarshipModel.findAll();

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getScholarshipsInfo,
  getScholarshipDetail,
  getAllScholarships,
};
