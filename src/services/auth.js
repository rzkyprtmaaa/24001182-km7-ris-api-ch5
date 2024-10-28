const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/users");
const { imageUpload } = require("../utils/imageHandler");
const bcrypt = require("bcrypt");
const { Unauthorized } = require("../utils/request");

exports.register = async (data, file) => {
  // if there any profile_picture file
  if (file?.profile_picture) {
    data.profile_picture = await imageUpload(file.profile_picture);
  }

  // create user
  const user = await userRepository.createUser(data);

  // generate token
  const token = createToken(user);

  // remove password so it will not displayed in response
  delete user.password;

  return {
    user,
    token,
  };
};

exports.login = async (data) => {
  // Cari user berdasarkan email
  const user = await userRepository.findUserByEmail(data.email);

  // Jika user tidak ditemukan
  if (!user) {
    throw new Unauthorized("Email is not register!");
  }

  // Verifikasi password
  const isPasswordValid = await bcrypt.compare(data.password, user.password);
  if (!isPasswordValid) {
    throw new Unauthorized("Incorrect Password!");
  }

  // create token
  const token = createToken(user);

  // Hapus password dari respon agar tidak ditampilkan
  delete user.password;

  // Kembalikan data user dan token
  return {
    user,
    token,
  };
};

exports.getProfile = async (user_id) => {
  const user = await userRepository.findUserById(user_id);

  if (!user) {
    throw new Error("User tidak ditemukan.");
  }

  delete user.password;

  return user;
};

const createToken = (user) => {
  // generate token with jwt
  const payload = {
    user_id: user.id,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "72h", // expired in 3 days
  });
  return token;
};
