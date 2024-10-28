const express = require("express");
const {
  validateGetOptions,
  validateGetOptionById,
  validateCreateOption,
  validateUpdateOption,
  validateDeleteOption,
} = require("../middleware/options");

const {
  getOptionsController,
  getOptionByIdController,
  createOptionController,
  updateOptionController,
  deleteOptionController,
} = require("../controllers/options.controller");

const router = express.Router();

router
  .route("/")
  .get(validateGetOptions, getOptionsController)
  .post(validateCreateOption, createOptionController);

router
  .route("/:id")
  .get(validateGetOptionById, getOptionByIdController)
  .put(validateUpdateOption, updateOptionController)
  .delete(validateDeleteOption, deleteOptionController);

module.exports = router;
