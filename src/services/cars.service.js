const {
  getCarsRepo,
  getCarByIdRepo,
  createCarRepo,
  updateCarRepo,
  deleteCarRepo,
} = require("../repositories/cars.repository.js");
const {
  createAvailabilityRepo,
  updateAvailabilityRepo,
  deleteAvailabilityRepo,
} = require("../repositories/availability.repository.js");
const {
  createSpecsRepo,
  updateSpecsRepo,
  deleteSpecsRepo,
} = require("../repositories/specs.repository.js");
const {
  createCarDetailsRepo,
  updateCarDetailsRepo,
  deleteCarDetailsRepo,
} = require("../repositories/car_details.repository.js");
const {
  createOptionsRepo,
  updateOptionsRepo,
  deleteOptionsRepo,
} = require("../repositories/options.repository.js");
const {
  createModelsRepo,
  updateModelsRepo,
  deleteModelsRepo,
} = require("../repositories/models.repository.js");

const { BadRequestError, NotFoundError } = require("../utils/request.js");
const { imageUpload } = require("../utils/imageHandler.js");

const getCarsService = async (manufacture) => {
  const data = await getCarsRepo(manufacture);
  if (data.length === 0) {
    throw new NotFoundError("Car not found");
  }
  return data;
};

const getCarByIdService = async (id) => {
  const data = await getCarByIdRepo(id);

  if (!data) {
    throw new NotFoundError("Car not found");
  }

  return data;
};

const createCarService = async (car, files) => {
  if (files?.image) {
    car.image = await imageUpload(files.image);
  }

  const {
    rentPerDay,
    availableAt,
    available,
    model,
    type,
    manufacture_id,
    capacity,
    option_details_id,
    spec_details_id,
    transmission,
    plate,
    year,
    description,
    image,
  } = car;

  const createAvailabilityTable = await createAvailabilityRepo(
    rentPerDay,
    availableAt,
    available
  );

  const createModelsTable = await createModelsRepo(model, type);

  const createCarTable = await createCarRepo(
    manufacture_id,
    createModelsTable.id,
    createAvailabilityTable.id
  );

  const createCarDetailsTable = await createCarDetailsRepo(
    capacity,
    transmission,
    plate,
    year,
    description,
    image,
    createCarTable.id
  );

  const createOptionsTable = await createOptionsRepo(
    option_details_id,
    createCarTable.id
  );

  const createSpecsTable = await createSpecsRepo(
    spec_details_id,
    createCarTable.id
  );

  const newCar = await getCarByIdRepo(createCarTable.id);

  return newCar;
};

const updateCarService = async (id, car, files) => {
  const existingCar = await getCarByIdRepo(id);
  if (!existingCar) {
    throw new NotFoundError("Car not found");
  }

  if (files?.image) {
    car.image = await imageUpload(files.image);
  } else {
    car.image = existingCar.image;
  }

  const {
    rentPerDay,
    availableAt,
    available,
    model,
    type,
    manufacture_id,
    capacity,
    option_details_id,
    spec_details_id,
    transmission,
    plate,
    year,
    description,
    image,
  } = car;

  const updateAvailabilityTable = await updateAvailabilityRepo(
    existingCar.availability_id,
    rentPerDay,
    availableAt,
    available
  );

  const updateModelsTable = await updateModelsRepo(
    existingCar.model_id,
    model,
    type
  );

  const updateCarTable = await updateCarRepo(
    id,
    manufacture_id,
    updateModelsTable.id,
    updateAvailabilityTable.id
  );

  const updateCarDetailsTable = await updateCarDetailsRepo(
    capacity,
    transmission,
    plate,
    year,
    description,
    image,
    id
  );

  const updateOptionsTable = await updateOptionsRepo(option_details_id, id);

  const updateSpecsTable = await updateSpecsRepo(spec_details_id, id);

  const updatedCar = await getCarByIdRepo(id);

  return updatedCar;
};

const deleteCarService = async (id) => {
  const existingCar = await getCarByIdRepo(id);

  if (!existingCar) {
    throw new NotFoundError("Car not found");
  }
  const deleteCarDetailsTable = await deleteCarDetailsRepo(id);
  const deleteOptionsTable = await deleteOptionsRepo(id);
  const deleteSpecsTable = await deleteSpecsRepo(id);
  const deleteAvailabilityTable = await deleteAvailabilityRepo(
    existingCar.availability_id
  );
  const deleteModelsTable = await deleteModelsRepo(existingCar.model_id);
  const deleteCarTable = await deleteCarRepo(existingCar.id);

  return {
    message: `Car with ID: ${existingCar.id} deleted successfully`,
    data: existingCar,
  };
};

module.exports = {
  getCarsService,
  getCarByIdService,
  createCarService,
  updateCarService,
  deleteCarService,
};
