const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();

exports.createModelsRepo = async (model, type) => {
  const newModels = await prisma.models.create({
    data: {
      model,
      type,
    },
  });

  const serializedModels = JSONBigInt.stringify(newModels);
  return JSONBigInt.parse(serializedModels);
};

exports.updateModelsRepo = async (id, model, type) => {
  const updatedModels = await prisma.models.update({
    where: { id },
    data: {
      model,
      type,
    },
  });

  const serializedModels = JSONBigInt.stringify(updatedModels);
  return JSONBigInt.parse(serializedModels);
};

exports.deleteModelsRepo = async (id) => {
  await prisma.cars.updateMany({
    where: { model_id: id },
    data: { model_id: null },
  });

  const deletedModels = await prisma.models.delete({
    where: { id: id },
  });

  const serializedModels = JSONBigInt.stringify(deletedModels);
  return JSONBigInt.parse(serializedModels);
};
