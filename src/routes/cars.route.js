const express = require("express");
const { authorization } = require("../middleware/auth");
const {
  validateGetCars,
  validateGetCarById,
  validateCreateCar,
  validateUpdateCar,
  validateDeleteCar,
} = require("../middleware/cars");
const {
  getCarsController,
  getCarByIdController,
  createCarController,
  updateCarController,
  deleteCarController,
} = require("../controllers/cars.controller");

const router = express.Router();

router
  .route("/")
  .get(authorization(1, 2), validateGetCars, getCarsController)
  .post(authorization(1), validateCreateCar, createCarController);

router
  .route("/:id")
  .get(authorization(1, 2), validateGetCarById, getCarByIdController)
  .put(authorization(1), validateUpdateCar, updateCarController)
  .delete(authorization(1), validateDeleteCar, deleteCarController);

module.exports = router;
