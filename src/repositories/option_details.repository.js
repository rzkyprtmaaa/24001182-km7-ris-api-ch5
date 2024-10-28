const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();

const getOptionsRepo = async (option) => {
  const searchedOptions = await prisma.option_details.findMany({
    where: option ? { option: option } : undefined,
  });

  const serializedOptions = JSONBigInt.stringify(searchedOptions);
  return JSONBigInt.parse(serializedOptions);
};

const getOptionByIdRepo = async (id) => {
  const searchedOptions = await prisma.option_details.findUnique({
    where: { id: parseInt(id) },
  });

  const serializedOptions = JSONBigInt.stringify(searchedOptions);
  return JSONBigInt.parse(serializedOptions);
};

const createOptionRepo = async (option) => {
  const createdOption = await prisma.option_details.create({
    data: { option },
  });

  const serializedOptions = JSONBigInt.stringify(createdOption);
  return JSONBigInt.parse(serializedOptions);
};

const updateOptionRepo = async (id, option) => {
  const updatedOption = await prisma.option_details.update({
    where: { id: parseInt(id) },
    data: { option },
  });

  const serializedOptions = JSONBigInt.stringify(updatedOption);
  return JSONBigInt.parse(serializedOptions);
};

const deleteOptionRepo = async (id) => {
  const deletedOption = await prisma.option_details.delete({
    where: { id: parseInt(id) },
  });

  const serializedOptions = JSONBigInt.stringify(deletedOption);
  return JSONBigInt.parse(serializedOptions);
};

module.exports = {
  getOptionsRepo,
  getOptionByIdRepo,
  createOptionRepo,
  updateOptionRepo,
  deleteOptionRepo,
};
