const UsersModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    const users = await UsersModel.findAll({
      attributes: ["id", "nama_lengkap", "email"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (req, res) => {
  const { nama_lengkap, email, password, confirmPassowrd } = req.body;

  if (password !== confirmPassowrd)
    return res.status(400).json({ message: "Password tidak sama" });

  const userId = uuidv4;

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await UsersModel.create({
      userId,
      nama_lengkap,
      email,
      password: hashPassword,
    });
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await UsersModel.findAll({
      where: {
        email: req.body.email,
      },
    });

    const matchPassword = await bcrypt.compare(
      req.body.password,
      user[0].password
    );

    if (!matchPassword) return res.status(400).json({ msg: "Password salah!" });

    const userId = user[0].id;
    const nama = user[0].nama_lengkap;
    const email = user[0].email;

    const accessToken = jwt.sign(
      { userId, nama, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, nama, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await UsersModel.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      //   aktifkan secure terlebih dahulu jika sudah di https
      //   secure: true,
    });
    res.json({ accessToken });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Email tidak ditemukan" });
  }
};

const logoutUser = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) return res.sendStatus(204);

  const user = await UsersModel.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });

  if (!user[0]) return res.sendStatus(204);

  const userId = user[0].id;

  await UsersModel.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );

  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  logoutUser,
};
