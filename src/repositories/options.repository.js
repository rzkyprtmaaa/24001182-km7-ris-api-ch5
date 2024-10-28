const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");
const prisma = new PrismaClient();

const createOptionsRepo = async (option_details_id, cars_id) => {
  const newOptions = option_details_id.map(async (id) => {
    await prisma.options.create({
      data: {
        option_details_id: id,
        cars_id,
      },
    });
  });
  const serializedOptions = JSONBigInt.stringify(newOptions);
  return JSONBigInt.parse(serializedOptions);
};

const updateOptionsRepo = async (option_details_id, ids) => {
  const carOptions = await prisma.options.findMany({
    where: { cars_id: ids },
  });

  const updatedOptions = await Promise.all(
    option_details_id.map(async (optionDetailId, index) => {
      return await prisma.options.update({
        where: { id: carOptions[index].id },
        data: {
          option_details_id: optionDetailId,
          cars_id: ids,
        },
      });
    })
  );

  const serializedOptions = JSONBigInt.stringify(updatedOptions);
  return JSONBigInt.parse(serializedOptions);
};

const deleteOptionsRepo = async (cars_id) => {
  const deleteOptions = await prisma.options.deleteMany({
    where: { cars_id : cars_id },
  });
  const serializedOptions = JSONBigInt.stringify(deleteOptions);
  return JSONBigInt.parse(serializedOptions);
};

module.exports = {
  createOptionsRepo,
  updateOptionsRepo,
  deleteOptionsRepo,
};
