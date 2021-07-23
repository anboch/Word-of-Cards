require('dotenv').config();
const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
};

const { DBURL } = process.env;

function connect() {
  mongoose
    .connect(DBURL, options)
    .then(() => console.log('MONGODB CONNECTED...'))
    .catch((err) => console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', err));
}

// дисконнект БД
// function disconnect() {
//   mongoose.disconnect()
//     .then(() => console.log('Disconnected'))
//     .catch((err) => console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', err));
// }

module.exports = connect;
