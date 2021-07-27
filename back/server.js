const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const userRouter = require('./routers/userRouter');
const deckRouter = require('./routers/deckRouter');
const cardRouter = require('./routers/cardRouter')
const connectDB = require('./bd/connect');
const morgan = require('morgan');
const User = require('./bd/userShema');
const { seader } = require('./bd/seader');

const { DBURL, PORT, COOKIE_NAME, SECRET } = process.env;

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// создаем сессии
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
app.use('/card', cardRouter);

app.listen(PORT ?? 2224, () => {
  console.log(`Server in port ${PORT ?? 2224}`);
});

const fs = require('fs');
const Deck = require('./bd/deckShema');
const Card = require('./bd/cardShema');

//Засеивание базы
// seader('./bd/cards');
