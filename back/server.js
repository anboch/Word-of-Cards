const express = require('express');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const userRouter = require('./routers/userRouter');
const deckRouter = require('./routers/deckRouter');
const connectDB = require('./bd/connect');

const { DBURL, PORT, COOKIE_NAME, SECRET } = process.env;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// создаем сессии
app.use(() => {
  return session({
    secret: SECRET,
    resave: true,
    saveUninitialized: false,
    name: COOKIE_NAME,
    cookie: { secure: false, maxAge: 60000000 },
    store: MongoStore.create({ mongoUrl: DBURL }),
  });
});

// Подключаемся к БД
connectDB();

app.use('/user', userRouter);
app.use('/deck', deckRouter);

app.listen(PORT ?? 2224, () => {
  console.log(`Server in port ${PORT ?? 2224}`);
});

// const fs = require('fs');
// const Deck = require('./bd/deckShema');
// const Card = require('./bd/cardShema');

// const folder = './bd/cards';

// const seader = async () => {
//   const readDirSync = fs.readdirSync(folder);

//   for (let fileName of readDirSync) {
//     const newDeck = new Deck({ title: fileName.split('.')[0] });
//     const fileData = fs.readFileSync(`${folder}/${fileName}`, 'utf-8');
//     const arrOfcards = fileData.split('\n');
//     for (let card of arrOfcards) {
//       const question = card.split('\t')[0];
//       const answer = card.split('\t')[1];
//       const randomLevel = Math.ceil(Math.random() * 8 + 0.001);
//       const timeInterval = new Date() - new Date('2020-07-25');
//       const randomLastAnswerDate =
//         new Date() - Math.ceil(Math.random() * timeInterval);
//       const newCard = new Card({
//         question,
//         answer,
//         levelOfStudy: randomLevel,
//         lastAnswerDate: new Date(randomLastAnswerDate),
//       });
//       newDeck.cards.push(newCard);
//     }
//     console.log('newDeck:', newDeck);
//     await newDeck.save();
//   }
// };

// seader();
