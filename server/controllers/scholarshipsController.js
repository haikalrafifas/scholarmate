const ScholarshipModel = require("../models/scholarshipsModel");

const getAllScholarships = async (req, res, next) => {
  try {
    const scholarships = await ScholarshipModel.getAllScholarships();

    res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getScholarshipByNegaraTujuan = async (req, res, next) => {
  try {
    let negara_tujuan = req.params.negara_tujuan;

    let [scholarships, _] = await ScholarshipModel.getScholarshipByNegaraTujuan(
      negara_tujuan
    );

    res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getScholarshipByDegree = async (req, res, next) => {
  try {
    let degree = req.params.degree;

    let [scholarships, _] = await ScholarshipModel.getScholarshipByDegree(
      degree
    );

    res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getScholarshipByType = async (req, res, next) => {
  try {
    let type = req.params.type;

    let [scholarships, _] = await ScholarshipModel.getScholarshipByType(type);

    res.status(200).json(scholarships);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getScholarshipOrderBy = async (req, res, next) => {
  const degree = req.params.degree;
  const negara_tujuan = req.params.negara_tujuan;
  const type = req.params.type;
  const order_by = req.params.order_by;

  if (negara_tujuan && order_by) {
    try {
      let [scholarships, _] =
        await ScholarshipModel.getScholarshipByNegaraTujuanAndOrderByPopularity(
          negara_tujuan,
          order_by
        );

      res.status(200).json(scholarships);
    } catch (error) {
      console.log(error);
      next(error);
    }
  } else {
    next(new Error("Invalid parameters"));
  }
};

module.exports = {
  getAllScholarships,
  getScholarshipByDegree,
  getScholarshipByNegaraTujuan,
  getScholarshipByType,
  getScholarshipOrderBy,
};
