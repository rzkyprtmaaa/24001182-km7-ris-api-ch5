const { successResponse } = require("../utils/response.js");
const {
  getCarsService,
  getCarByIdService,
  createCarService,
  updateCarService,
  deleteCarService,
} = require("../services/cars.service.js");

const getCarsController = async (req, res) => {
  const { manufacture } = req.query;

  const data = await getCarsService(manufacture);
  successResponse(res, data);
};

const getCarByIdController = async (req, res) => {
  const { id } = req.params;

  const data = await getCarByIdService(id);
  successResponse(res, data);
};

const createCarController = async (req, res) => {
  const { body, files } = req;

  const data = await createCarService(body, files);
  successResponse(res, data);
};

const updateCarController = async (req, res) => {
  const { id } = req.params;
  const { body, files } = req;

  const data = await updateCarService(id, body, files);
  successResponse(res, data);
};

const deleteCarController = async (req, res) => {
  const { id } = req.params;

  const data = await deleteCarService(id);
  successResponse(res, data);
};

module.exports = {
  getCarsController,
  getCarByIdController,
  createCarController,
  updateCarController,
  deleteCarController,
};
