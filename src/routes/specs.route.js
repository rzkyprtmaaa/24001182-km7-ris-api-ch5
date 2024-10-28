const express = require("express");
const {
  validateGetSpecs,
  validateGetSpecsById,
  validateCreateSpecs,
  validateUpdateSpecs,
  validateDeleteSpecs,
} = require("../middleware/specs");
const {
  getSpecsController,
  getSpecsByIdController,
  createSpecsController,
  updateSpecsController,
  deleteSpecsController,
} = require("../controllers/specs.controller");

const router = express.Router();

router
  .route("/")
  .get(validateGetSpecs, getSpecsController)
  .post(validateCreateSpecs, createSpecsController);

router
  .route("/:id")
  .get(validateGetSpecsById, getSpecsByIdController)
  .put(validateUpdateSpecs, updateSpecsController)
  .delete(validateDeleteSpecs, deleteSpecsController);

module.exports = router;
