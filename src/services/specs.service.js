const {
  getSpecsRepo,
  getSpecsByIdRepo,
  createSpecsRepo,
  updateSpecsRepo,
  deleteSpecsRepo,
} = require("../repositories/spec_details.repository.js");
const { BadRequestError, NotFoundError } = require("../utils/request.js");

const getSpecsService = async (spec) => {
  return getSpecsRepo(spec);
};

const getSpecsByIdService = async (id) => {
  const data = await getSpecsByIdRepo(id);
  if (!data) {
    throw new NotFoundError("Specs not found");
  }
  return data;
};

const createSpecsService = async (spec) => {
  const data = await createSpecsRepo(spec);
  return data;
};

const updateSpecsService = async (id, spec, ) => {
  const existingSpecs = await getSpecsByIdRepo(id);
  if (!existingSpecs) {
    throw new NotFoundError("Specs not found");
  }
  const updatedSpecss = await updateSpecsRepo(id, spec);
  if (!updatedSpecss) {
    throw new BadRequestError("Failed to update spec");
  }

  return updatedSpecss;
};

const deleteSpecsService = async (id) => {
  const existingSpecs = await getSpecsByIdRepo(id);
  if (!existingSpecs) {
    throw new NotFoundError("Specs not found");
  }

  const deletedSpecs = await deleteSpecsRepo(id);
  if (!deletedSpecs) {
    throw new BadRequestError("Failed to delete spec");
  }

  return deletedSpecs;
};

module.exports = {
  getSpecsService,
  getSpecsByIdService,
  createSpecsService,
  updateSpecsService,
  deleteSpecsService,
};
