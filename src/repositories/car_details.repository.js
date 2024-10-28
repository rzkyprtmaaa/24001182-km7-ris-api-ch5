const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();

const createCarDetailsRepo = async (
  capacity,
  transmission,
  plate,
  year,
  description,
  image,
  cars_id
) => {
  const newOptions = await prisma.car_details.create({
    data: {
      capacity,
      transmission,
      plate,
      year,
      image,
      description,
      cars_id,
    },
  });
  const serializedOptions = JSONBigInt.stringify(newOptions);
  return JSONBigInt.parse(serializedOptions);
};

const updateCarDetailsRepo = async (
  capacity,
  transmission,
  plate,
  year,
  description,
  image,
  car_id
) => {
  const carDetails = await prisma.car_details.findFirst({
    where: { cars_id: car_id },
  });

  const updatedCarDetails = await prisma.car_details.update({
    where: { id: carDetails.id },
    data: {
      capacity,
      transmission,
      plate,
      year,
      image,
      description,
    },
  });
  const serializedCarDetails = JSONBigInt.stringify(updatedCarDetails);
  return JSONBigInt.parse(serializedCarDetails);
};

const deleteCarDetailsRepo = async (cars_id) => {
  const carDetails = await prisma.car_details.deleteMany({
    where: { cars_id: cars_id },
  });

  const serializedCarDetails = JSONBigInt.stringify(carDetails);
  return JSONBigInt.parse(serializedCarDetails);
};

module.exports = {
  createCarDetailsRepo,
  updateCarDetailsRepo,
  deleteCarDetailsRepo,
};
