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

module.exports = {
  getAllScholarships,
  getScholarshipByNegaraTujuan,
};
