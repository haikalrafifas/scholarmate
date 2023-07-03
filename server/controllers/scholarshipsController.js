const ScholarshipModel = require("../models/scholarshipsModel");

const getScholarshipsInfo = async (req, res, next) => {
  const { degree, negara_tujuan, tipe, urut_berdasarkan } = req.query;

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
  }
};

const getScholarshipByDegreeAndCountryAndTypeAndOrderBy = async (
  req,
  res,
  next
) => {
  const { degree, negara_tujuan, tipe, urut_berdasarkan } = req.query;

  try {
    let [scholarships, _] =
      await ScholarshipModel.getScholarshipByDegreeAndCountryAndTypeAndOrderBy(
        degree,
        negara_tujuan,
        tipe,
        urut_berdasarkan
      );

    return res.status(200).json(scholarships);
  } catch (error) {
    res.status(204);
    console.log(error);
    next(error);
  }
};

const getScholarshipByTypeAndOrderBy = async (req, res, next) => {
  const { tipe, urut_berdasarkan } = req.query;

  try {
    let [scholarships, _] =
      await ScholarshipModel.getScholarshipByTypeAndOrderBy(
        tipe,
        urut_berdasarkan
      );

    return res.status(200).json(scholarships);
  } catch (error) {
    res.status(204);
    console.log(error);
    next(error);
  }
};

const getScholarshipByCountryAndOrderBy = async (req, res, next) => {
  const { negara_tujuan, urut_berdasarkan } = req.query;

  try {
    let [scholarships, _] =
      await ScholarshipModel.getScholarshipByCountryAndOrderBy(
        negara_tujuan,
        urut_berdasarkan
      );

    return res.status(200).json(scholarships);
  } catch (error) {
    res.status(204);
    console.log(error);
    next(error);
  }
};

const getScholarshipByCountryAndType = async (req, res, next) => {
  const { negara_tujuan, tipe } = req.query;

  try {
    let [scholarships, _] =
      await ScholarshipModel.getScholarshipByCountryAndType(
        negara_tujuan,
        tipe
      );

    return res.status(200).json(scholarships);
  } catch (error) {
    res.status(204);
    console.log(error);
    next(error);
  }
};

const getScholarshipByDegreeAndOrderBy = async (req, res, next) => {
  const { degree, urut_berdasarkan } = req.query;

  try {
    let [scholarships, _] =
      await ScholarshipModel.getScholarshipByDegreeAndOrderBy(
        degree,
        urut_berdasarkan
      );

    return res.status(200).json(scholarships);
  } catch (error) {
    res.status(204);
    console.log(error);
    next(error);
  }
};

const getScholarshipByDegreeAndType = async (req, res, next) => {
  const { degree, tipe } = req.query;

  try {
    let [scholarships, _] =
      await ScholarshipModel.getScholarshipByDegreeAndType(degree, tipe);

    return res.status(200).json(scholarships);
  } catch (error) {
    res.status(204);
    console.log(error);
    next(error);
  }
};

const getScholarshipByDegreeAndCountry = async (req, res, next) => {
  const { degree, negara_tujuan } = req.query;

  try {
    let [scholarships, _] =
      await ScholarshipModel.getScholarshipByDegreeAndCountry(
        degree,
        negara_tujuan
      );

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getScholarshipByDegree = async (req, res, next) => {
  const { degree } = req.query;

  try {
    let [scholarships, _] = await ScholarshipModel.getScholarshipByDegree(
      degree
    );

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getScholarshipByCountry = async (req, res, next) => {
  const { negara_tujuan } = req.query;

  try {
    let [scholarships, _] = await ScholarshipModel.getScholarshipByCountry(
      negara_tujuan
    );

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getScholarshipByType = async (req, res, next) => {
  const { tipe } = req.query;

  try {
    let [scholarships, _] = await ScholarshipModel.getScholarshipByType(tipe);

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getScholarshipOrderBy = async (req, res, next) => {
  const { urut_berdasarkan } = req.query;

  try {
    let [scholarships, _] = await ScholarshipModel.getScholarshipOrderBy(
      urut_berdasarkan
    );

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    res.status(204);
    next(error);
  }
};

const getAllScholarships = async (req, res, next) => {
  try {
    const scholarships = await ScholarshipModel.getAllScholarships();

    return res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getScholarshipsInfo,
};
