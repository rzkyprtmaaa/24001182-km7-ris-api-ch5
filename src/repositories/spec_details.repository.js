const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();

const getSpecsRepo = async (spec) => {
  const filters = {};

  if (spec) {
    filters.spec = {
      contains: spec,
      mode: "insensitive",
    };
  }

  const searchedSpec = await prisma.spec_details.findMany({
    where: filters,
  });

  const serializedSpecs = JSONBigInt.stringify(searchedSpec);
  return JSONBigInt.parse(serializedSpecs);
};

const getSpecsByIdRepo = async (id) => {
  const specs = await prisma.spec_details.findFirst({
    where: {
      id: id,
    },
  });
  const serializedSpecs = JSONBigInt.stringify(specs);
  return JSONBigInt.parse(serializedSpecs);
};

const createSpecsRepo = async (spec) => {
  const newSpec = await prisma.spec_details.create({
    data: {
      spec,
    },
  });

  const serializedSpecs = JSONBigInt.stringify(newSpec);
  return JSONBigInt.parse(serializedSpecs);
};

const updateSpecsRepo = async (id, spec) => {
  const updatedSpecs = await prisma.spec_details.update({
    where: { id },
    data: { spec },
  });

  const serializedSpecs = JSONBigInt.stringify(updatedSpecs);
  return JSONBigInt.parse(serializedSpecs);
};

const deleteSpecsRepo = async (id) => {
  const deletedSpecs = await prisma.spec_details.delete({
    where: { id },
  });

  const serializedSpecs = JSONBigInt.stringify(deletedSpecs);
  return JSONBigInt.parse(serializedSpecs);
};

module.exports = {
  getSpecsRepo,
  getSpecsByIdRepo,
  createSpecsRepo,
  updateSpecsRepo,
  deleteSpecsRepo,
};
