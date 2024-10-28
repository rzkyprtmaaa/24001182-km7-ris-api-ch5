const manufactureService = require("../services/manufacture.service");
const { successResponse } = require("../utils/response");

exports.getManufactures = async (req, res) => {
  const data = await manufactureService.getManufactures(req.query?.name);
  successResponse(res, data);
};

exports.getManufactureById = async (req, res, next) => {
  const { id } = req.params;

  const data = await manufactureService.getManufactureById(id);
  successResponse(res, data);
};

exports.createManufacture = async (req, res) => {
  const data = await manufactureService.createManufacture(req.body);
  successResponse(res, data);
};

exports.updateManufacture = async (req, res, next) => {
  const { id } = req.params;
  const data = await manufactureService.updateManufacture(id, req.body);
  successResponse(res, data);
};

exports.deleteManufactureById = async (req, res, next) => {
  const { id } = req.params;
  const data = await manufactureService.deleteManufactureById(id);
  successResponse(res, data);
};
