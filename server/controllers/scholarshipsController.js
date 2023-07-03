const ScholarshipModel = require("../models/scholarshipsModel");

const getScholarshipsInfo = async (req, res, next) => {
  const { degree, negara_tujuan, tipe, urut_berdasarkan } = req.query;

  if (degree && negara_tujuan && tipe && urut_berdasarkan) {
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
  }

  if (tipe && urut_berdasarkan) {
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
  }

  if (negara_tujuan && urut_berdasarkan) {
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
  }

  if (negara_tujuan && tipe) {
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
  }

  if (degree && urut_berdasarkan) {
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
  }

  if (degree && tipe) {
    try {
      let [scholarships, _] =
        await ScholarshipModel.getScholarshipByDegreeAndType(degree, tipe);

      return res.status(200).json(scholarships);
    } catch (error) {
      res.status(204);
      console.log(error);
      next(error);
    }
  }

  if (degree && negara_tujuan) {
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
  }

  if (degree) {
    try {
      let [scholarships, _] = await ScholarshipModel.getScholarshipByDegree(
        degree
      );

      return res.status(200).json(scholarships);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  if (negara_tujuan) {
    try {
      let [scholarships, _] = await ScholarshipModel.getScholarshipByCountry(
        negara_tujuan
      );

      return res.status(200).json(scholarships);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  if (tipe) {
    try {
      let [scholarships, _] = await ScholarshipModel.getScholarshipByType(tipe);

      return res.status(200).json(scholarships);
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

      return res.status(200).json(scholarships);
    } catch (error) {
      console.log(error);
      res.status(204);
      next(error);
    }
  }

  if (!degree && !negara_tujuan && !tipe) {
    try {
      const scholarships = await ScholarshipModel.getAllScholarships();

      return res.status(200).json(scholarships);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
};

module.exports = {
  getScholarshipsInfo,
};
