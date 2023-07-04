const RumpunModel = require("../models/rumpunModel");

const getAllRumpun = async (req, res, next) => {
  try {
    const rumpun = await RumpunModel.getAllRumpun();

    return res.status(200).json(rumpun);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAllRumpun,
};
