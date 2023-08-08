const House = require("../models/houseConstruction.model");
module.exports.list = (req, res, next) => {
  House.find()
    .then((house) => res.json(house))
    .catch((error) => next(error));
};
module.exports.create = (req, res, next) => {
  House.create({
    soldPieces: req.body.soldPieces,
    remainingPieces: req.body.remainingPieces,
    totalPieces: req.body.totalPieces,
  })
    .then((house) => {
      res.json(house);
    })
    .catch((error) => next(error));
};
