const { successResponse } = require("../utils/response.js");
const {
  getOptionsService,
  getOptionByIdService,
  createOptionService,
  updateOptionService,
  deleteOptionService,
} = require("../services/options.service.js");

const getOptionsController = async (req, res) => {
  const { option } = req.query;

  const data = await getOptionsService(option);
  successResponse(res, data);
};

const getOptionByIdController = async (req, res) => {
  const { id } = req.params;

  const data = await getOptionByIdService(id);
  successResponse(res, data);
};

const createOptionController = async (req, res) => {
  const { body } = req;

  const data = await createOptionService(body.option);
  successResponse(res, data);
};

const updateOptionController = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  console.log(id, body.option);

  const data = await updateOptionService(id, body.option);
  successResponse(res, data);
};

const deleteOptionController = async (req, res) => {
  const { id } = req.params;

  const data = await deleteOptionService(id);
  successResponse(res, data);
};

module.exports = {
  getOptionsController,
  getOptionByIdController,
  createOptionController,
  updateOptionController,
  deleteOptionController,
};
