const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const userRouter = require('./routers/userRouter');
const deckRouter = require('./routers/deckRouter');
const connectDB = require('./bd/connect');

const { DBURL, PORT, COOKIE_NAME, SECRET } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// создаем сессии и записываем в БД
app.use(
  session({
    secret: SECRET,
    resave: true,
    saveUninitialized: false,
    name: COOKIE_NAME,
    cookie: { secure: false, maxAge: 60000000 },
    store: MongoStore.create({ mongoUrl: DBURL }),
  })
);

// Подключаемся к БД
connectDB();

app.use('/user', userRouter);
app.use('/deck', deckRouter);

app.listen(PORT || 2224, () => {
  console.log(`Server in port ${PORT || 2224}`);
});
