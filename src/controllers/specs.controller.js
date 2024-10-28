const { successResponse } = require("../utils/response.js");
const {
  getSpecsService,
  getSpecsByIdService,
  createSpecsService,
  updateSpecsService,
  deleteSpecsService,
} = require("../services/specs.service.js");

const getSpecsController = async (req, res) => {
  const { spec } = req.query;

  const data = await getSpecsService(spec);
  successResponse(res, data);
};

const getSpecsByIdController = async (req, res) => {
  const { id } = req.params;

  const data = await getSpecsByIdService(id);
  successResponse(res, data);
};

const createSpecsController = async (req, res) => {
  const { body } = req;

  const data = await createSpecsService(body.spec);
  successResponse(res, data);
};

const updateSpecsController = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const data = await updateSpecsService(id, body.spec);
  successResponse(res, data);
};

const deleteSpecsController = async (req, res) => {
  const { id } = req.params;

  const data = await deleteSpecsService(id);
  successResponse(res, data);
};

module.exports = {
  getSpecsController,
  getSpecsByIdController,
  createSpecsController,
  updateSpecsController,
  deleteSpecsController,
};
