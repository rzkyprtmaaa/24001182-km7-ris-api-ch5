const {
  getOptionsRepo,
  getOptionByIdRepo,
  createOptionRepo,
  updateOptionRepo,
  deleteOptionRepo,
} = require("../repositories/option_details.repository.js");
const { BadRequestError, NotFoundError } = require("../utils/request.js");

const getOptionsService = async (option) => {
  const data = await getOptionsRepo(option);
  if (data.length === 0) {
    throw new NotFoundError("Option not found");
  }
  return data;
}

const getOptionByIdService = async (id) => {
  const data = await getOptionByIdRepo(id);

  if (!data) {
    throw new NotFoundError("Option not found");
  }

  return data;
}

const createOptionService = async (option) => {
  const data = await createOptionRepo(option);
  return data;
}

const updateOptionService = async (id, option) => {
  const existingOption = await getOptionByIdRepo(id);
  if (!existingOption) {
    throw new NotFoundError("Option not found");
  }

  const updatedOptions = await updateOptionRepo(id, option);
  if (!updatedOptions) {
    throw new BadRequestError("Failed to update option");
  }

  return updatedOptions;
}

const deleteOptionService = async (id) => {
  const existingOption = await getOptionByIdRepo(id);
  if (!existingOption) {
    throw new NotFoundError("Option not found");
  }

  const data = await deleteOptionRepo(id);
  return data;
}

module.exports = {
  getOptionsService,
  getOptionByIdService,
  createOptionService,
  updateOptionService,
  deleteOptionService,
};