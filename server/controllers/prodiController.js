const ProdiModel = require("../models/prodiModel");

const getAllProdiByRumpunId = async (req, res, next) => {
  try {
    let id_rumpun = req.params.id_rumpun;

    let [prodi, _] = await ProdiModel.getAllProdiByRumpunId(id_rumpun);

    return res.status(200).json(prodi);
  } catch (error) {
    res.status(204);
    console.log(error);
    next(error);
  }
};

const getProdiDetail = async (req, res, next) => {
  try {
    let id_prodi = req.params.id_prodi;

    let [prodi, _] = await ProdiModel.getProdiDetail(id_prodi);

    return res.status(200).json(prodi);
  } catch (error) {
    res.status(204);
    console.log(error);
    next(error);
  }
};

const getTempatKuliahProdi = async (req, res, next) => {
  try {
    let id_prodi = req.params.id_prodi;

    let [prodi, _] = await ProdiModel.getTempatKuliahProdi(id_prodi);

    res.status(200).json(prodi);
  } catch (error) {
    res.status(204);
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAllProdiByRumpunId,
  getProdiDetail,
  getTempatKuliahProdi,
};
