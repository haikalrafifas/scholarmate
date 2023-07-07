const ScholarshipModel = require("../models/scholarshipsModel");
const { Op } = require("sequelize");

const getScholarshipsInfo = async (req, res, next) => {
  const { degree, negara_tujuan, tipe, urut_berdasarkan } = req.query;

<<<<<<< HEAD
    res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    next(error);
=======
  if (degree && negara_tujuan && tipe && urut_berdasarkan) {
    return getScholarshipByDegreeAndCountryAndTypeAndOrderBy(req, res);
  }

  if (tipe && urut_berdasarkan) {
    return getScholarshipByTypeAndOrderBy(req, res);
  }

  if (negara_tujuan && urut_berdasarkan) {
    return getScholarshipByCountryAndOrderBy(req, res);
  }

  if (negara_tujuan && tipe) {
    return getScholarshipByCountryAndType(req, res);
  }

  if (degree && urut_berdasarkan) {
    return getScholarshipByDegreeAndOrderBy(req, res);
  }

  if (degree && tipe) {
    return getScholarshipByDegreeAndType(req, res);
  }

  if (degree && negara_tujuan) {
    return getScholarshipByDegreeAndCountry(req, res);
  }

  if (degree) {
    return getScholarshipByDegree(req, res);
  }

  if (negara_tujuan) {
    return getScholarshipByCountry(req, res);
  }

  if (tipe) {
    return getScholarshipByType(req, res);
  }

  if (urut_berdasarkan) {
    return getScholarshipOrderBy(req, res);
  }

  if (!degree && !negara_tujuan && !tipe) {
    return getAllScholarships(req, res);
>>>>>>> origin/Adhi
  }
};

const getScholarshipByDegreeAndCountryAndTypeAndOrderBy = async (
  req,
  res,
  next
) => {
  const { degree, negara_tujuan, tipe, urut_berdasarkan } = req.query;

  try {
    let scholarships = await ScholarshipModel.findAll({
      where: {
        tingkat_pendidikan: {
          [Op.like]: `%${degree}%`,
        },
        negara_tujuan: {
          [Op.like]: `${negara_tujuan}%`,
        },
        tipe_beasiswa: {
          [Op.like]: `${tipe}%`,
        },
      },
      order: [[urut_berdasarkan, "DESC"]],
    });

    res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getScholarshipByTypeAndOrderBy = async (req, res, next) => {
  const { tipe, urut_berdasarkan } = req.query;

  try {
    let scholarships = await ScholarshipModel.findAll({
      where: {
        tipe_beasiswa: {
          [Op.like]: `%${tipe}%`,
        },
      },
      order: [[urut_berdasarkan, "DESC"]],
    });

    res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getScholarshipByCountryAndOrderBy = async (req, res, next) => {
  const { negara_tujuan, urut_berdasarkan } = req.query;

  try {
    let scholarships = await ScholarshipModel.findAll({
      where: {
        negara_tujuan: {
          [Op.like]: `%${negara_tujuan}%`,
        },
      },
      order: [[urut_berdasarkan, "DESC"]],
    });
    res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getScholarshipByCountryAndType = async (req, res, next) => {
  const { negara_tujuan, tipe } = req.query;

  try {
    let scholarships = await ScholarshipModel.findAll({
      where: {
        negara_tujuan: {
          [Op.like]: `%${negara_tujuan}%`,
        },
        tipe_beasiswa: {
          [Op.like]: `%${tipe}%`,
        },
      },
    });

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getScholarshipByDegreeAndOrderBy = async (req, res, next) => {
  const { degree, urut_berdasarkan } = req.query;

  try {
    let scholarships = await ScholarshipModel.findAll({
      where: {
        tingkat_pendidikan: {
          [Op.like]: `%${degree}%`,
        },
      },
      order: [[urut_berdasarkan, "DESC"]],
    });

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getScholarshipByDegreeAndType = async (req, res, next) => {
  const { degree, tipe } = req.query;

  try {
    let scholarships = await ScholarshipModel.findAll({
      where: {
        tingkat_pendidikan: {
          [Op.like]: `%${degree}%`,
        },
        tipe_beasiswa: {
          [Op.like]: `%${tipe}%`,
        },
      },
    });
    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getScholarshipByDegreeAndCountry = async (req, res, next) => {
  const { degree, negara_tujuan } = req.query;

  try {
    let scholarships = await ScholarshipModel.findAll({
      where: {
        negara_tujuan: {
          [Op.like]: `%${negara_tujuan}%`,
        },
        tingkat_pendidikan: {
          [Op.like]: `%${degree}%`,
        },
      },
    });

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getScholarshipByDegree = async (req, res, next) => {
  const { degree } = req.query;

  try {
    let scholarships = await ScholarshipModel.findAll({
      where: {
        tingkat_pendidikan: {
          [Op.like]: `%${degree}%`,
        },
      },
    });

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getScholarshipByCountry = async (req, res, next) => {
  const { negara_tujuan } = req.query;

  try {
    let scholarships = await ScholarshipModel.findAll({
      where: {
        negara_tujuan: {
          [Op.like]: `%${negara_tujuan}%`,
        },
      },
    });

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getScholarshipByType = async (req, res, next) => {
  const { tipe } = req.query;

  try {
    let scholarships = await ScholarshipModel.findAll({
      where: {
        tipe_beasiswa: {
          [Op.like]: `%${tipe}%`,
        },
      },
    });

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getScholarshipOrderBy = async (req, res, next) => {
  const { urut_berdasarkan } = req.query;

  try {
    let scholarships = await ScholarshipModel.findAll({
      order: [[urut_berdasarkan, "DESC"]],
    });

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
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
};
