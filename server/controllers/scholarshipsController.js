const ScholarshipModel = require("../models/scholarshipsModel");

const getScholarshipsInfo = async (req, res, next) => {
  const { degree, negara_tujuan, tipe, urut_berdasarkan } = req.query;

  if (degree) {
    try {
      let [scholarships, _] = await ScholarshipModel.getScholarshipByDegree(
        degree
      );

      res.status(200).json(scholarships);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  if (negara_tujuan) {
    try {
      let [scholarships, _] =
        await ScholarshipModel.getScholarshipByNegaraTujuan(negara_tujuan);

      res.status(200).json(scholarships);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  if (tipe) {
    try {
      let [scholarships, _] = await ScholarshipModel.getScholarshipByType(tipe);

      res.status(200).json(scholarships);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  if (urut_berdasarkan) {
    try {
      let [scholarships, _] = await ScholarshipModel.getScholarshipOrderBy(
        urut_berdasarkan
      );

      res.status(200).json(scholarships);
    } catch (error) {
      console.log(error);
      res.status(204);
      next(error);
    }
  }

  if (!degree && !negara_tujuan && !tipe) {
    try {
      const scholarships = await ScholarshipModel.getAllScholarships();

      res.status(200).json(scholarships);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
};

module.exports = {
  getScholarshipsInfo,
};
