const express = require('express');
const User = require('../bd/userShema');
const mailer = require('../nodemailer')

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
        to:newUser.email,
        subject:'Congratulation',
        text:`Поздравляем вы успешно зарегестрировались на нашем сайте!
        ваши данные:
        login:${newUser.login}
        password:${newUser.password}
        Данное письмо не требует ответа!`
      }
     mailer(message)
    } else {
      res.status(400).json({ createTodo: false });
    }
  });


router
  .route('/login')

  .post(async (req, res) => {
    const { login, password } = req.body;
    if (login && password) {
      const loginUser = await User.findOne({ login, password });
      if (loginUser) {
        req.session.user = loginUser;
        res.status(200).json(loginUser);
      } else {
        res.status(200).json({ userInBase: false });
      }
    } else {
      res.status(400).json({ loginUser: false });
    }
  });



module.exports = router;
