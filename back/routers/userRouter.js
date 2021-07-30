const express = require('express');
const User = require('../bd/userShema');
const mailer = require('../nodemailer');
require('dotenv').config();
const { COOKIE_NAME } = process.env;
const { isLogin, notLogin } = require('../middlewares/authMdw');

const router = express.Router();

router
  .route('/signup')

  .post(async (req, res) => {
    const { login, email, password } = req.body;
    if (login && email && password) {
      const newUser = await User.create({ login, email, password });
      req.session.user = newUser;
      res.status(200).json(newUser);
      const message = {
        to: newUser.email,
        subject: 'World of cards',
        text: `Поздравляем, Вы успешно зарегестрировались на нашем сайте!
        Ваши данные:
        login:${newUser.login}
        password:${newUser.password}
        Данное письмо не требует ответа!`,
      };
      mailer(message);
    } else {
      res.status(400).json({ createTodo: false });
    }
  });

router.route('/login').post(async (req, res) => {
  const { login, password } = req.body;
  if (login && password) {
    const loginUser = await User.findOne({ login, password });
    if (loginUser) {
      req.session.user = loginUser;
      req.session.fakeTime = new Date().getTime();
      res.status(200).json(loginUser);
    } else {
      res.status(200).json({ userInBase: false });
    }
  } else {
    res.status(400).json({ loginUser: false });
  }
});

router.route('/changetime').post(async (req, res) => {
  const { newDate } = req.body;
  req.session.fakeTime = Date.parse(newDate);
  const daysOfPause = Math.floor(
    (req.session.fakeTime - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );
  console.log('req.session.fakeTime1:', req.session.fakeTime);
  console.log('daysOfPause:', daysOfPause);
});

// Выход из учетной записи
router.route('/logout').get(async (req, res) => {
  await req.session.destroy(); // удаляем сессию
  if (req.cookies[COOKIE_NAME]) {
    res.clearCookie(COOKIE_NAME); // удаляем куки
    res.sendStatus(200);
  }
});

module.exports = router;
