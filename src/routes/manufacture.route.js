const express = require("express");

const {
  validateGetManufactures,
  validateGetManufactureById,
  validateCreateManufacture,
  validateUpdateManufacture,
  validateDeleteManufactureById,
} = require("../middleware/manufacture.middleware");
const {
  getManufactures,
  getManufactureById,
  createManufacture,
  updateManufacture,
  deleteManufactureById,
} = require("../controllers/manufacture.controller");

const router = express.Router();

router
  .route("/")
  .get(validateGetManufactures, getManufactures)
  .post(validateCreateManufacture, createManufacture);

router
  .route("/:id")
  .get(validateGetManufactureById, getManufactureById)
  .put(validateUpdateManufacture, updateManufacture)
  .delete(validateDeleteManufactureById, deleteManufactureById);

module.exports = router;
