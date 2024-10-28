const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();

const createAvailabilityRepo = async (rentPerDay, availableAt, available) => {
  const newAvailability = await prisma.availability.create({
    data: {
      rent_perday: rentPerDay,
      available_at: availableAt,
      available: available,
    },
  });
  const serializedAvailability = JSONBigInt.stringify(newAvailability);

  return JSONBigInt.parse(serializedAvailability);
};

const updateAvailabilityRepo = async (
  id,
  rentPerDay,
  availableAt,
  available
) => {
  const updatedAvailability = await prisma.availability.update({
    where: { id },
    data: {
      rent_perday: rentPerDay,
      available_at: availableAt,
      available,
    },
  });
  const serializedAvailabilitys = JSONBigInt.stringify(updatedAvailability);
  return JSONBigInt.parse(serializedAvailabilitys);
};

const deleteAvailabilityRepo = async (id) => {
  await prisma.cars.updateMany({
    where: { availability_id: id },
    data: { availability_id: null },
  });

  const deletedAvailability = await prisma.availability.delete({
    where: { id },
  });

  const serializedAvailability = JSONBigInt.stringify(deletedAvailability);
  return JSONBigInt.parse(serializedAvailability);
};

module.exports = {
  createAvailabilityRepo,
  updateAvailabilityRepo,
  deleteAvailabilityRepo,
};
