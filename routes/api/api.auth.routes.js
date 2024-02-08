const router = require("express").Router();

const { User } = require("../../db/models");
const bcrypt = require("bcrypt");
const generateTokens = require("../../utils/authUtils");
const configJWT = require("../../middleware/configJWT");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

router.post("/sign-in", async (req, res) => {
  let user;
  try {
    const { name, password } = req.body;
    if(name.trim() !== "" && password.trim() !== "" &&  name.trim() === name && password.trim() === password ){
    user = await User.findOne({ where: { name } });
    if (!user) {
      res.json({ message: "Такого пользователя нет или пароль неверный" });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res.json({ message: "Такого пользователя нет или пароль неверный" });
      return;
    }
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name },
    });
    res.cookie("access", accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie("refresh", refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });
    res.json({ message: "success" });
  }else{
    res.json({ message: "Заполните все поля" });
  }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post("/sign-up", async (req, res) => {
  let user;
  try {
    const { name, email, password } = req.body;
    if (name.trim() !== "" && email.trim() !== "" && password.trim() !== "" && name.trim() === name && email.trim() === email && password.trim() === password) {
      if (!isValidEmail(email)) {
        res.json({ type: "blabla", message: "Некорректный формат email" });
        return;
      }
      user = await User.findOne({ where: { email } });
      if (user) {
        res.json({ message: "Такой пользователь уже есть!" });
        return;
      }
      const hash = await bcrypt.hash(password, 10);
      user = await User.create({ name, email, password: hash, isAdmin: true });

      const { accessToken, refreshToken } = generateTokens({
        user: { id: user.id, name: user.name },
      });
      res.cookie("access", accessToken, {
        maxAge: 1000 * 60 * 5,
        httpOnly: true,
      });

      res.cookie("refresh", refreshToken, {
        maxAge: 1000 * 60 * 60 * 12,
        httpOnly: true,
      });
      res.json({ message: "success" });
    } else {
      res.json({ message: "Заполните все поля" });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
