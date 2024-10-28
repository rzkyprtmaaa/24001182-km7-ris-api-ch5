const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

exports.createUser = async (data) => {
  // encrypt the password
  data.password = await bcrypt.hash(data.password, 10);

  //   create new user
  const newUser = await prisma.users.create({
    data,
  });

  // Convert BigInt fields to string for safe serialization
  const serializedUsers = JSONBigInt.stringify(newUser);
  return JSONBigInt.parse(serializedUsers);
};

exports.findUserByEmail = async (email) => {
  // Cari user berdasarkan email
  const user = await prisma.users.findUnique({
    where: { email },
  });

  // Jika user ditemukan, konversikan BigInt fields untuk serialisasi aman
  if (user) {
    const serializedUser = JSONBigInt.stringify(user);
    return JSONBigInt.parse(serializedUser);
  }
};

exports.getUserById = async (id) => {
  const user = await prisma.users.findUnique({
    where: { id },
  });
  // Convert BigInt fields to string for safe serialization
  const serializedStudents = JSONBigInt.stringify(user);
  return JSONBigInt.parse(serializedStudents);
};