const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
  question: { type: String },
  answer: { type: String },
  lastAnswerDate: { type: Date, default: Date.now },
  levelOfStudy: {
    type: Number,
    default: 1,
  },
});

const Card = model('Card', cardSchema);

module.exports = Card;
