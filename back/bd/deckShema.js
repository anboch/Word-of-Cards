const { Schema, model } = require('mongoose');

const deckSchema = new Schema({
  title: { type: String },
  private: {
    type: Boolean,
    default: true,
  },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  cards: {
    type: Array,
    default: [],
  },
});

deckSchema.static.clusteringCardsByStatus = async (userId) => {
  const allUserDecks = await this.find({ userId });
  let allUserDecksWithInfoOfDelay = [];
  for (let deck of allUserDecks) {
    const notStarted = [];
    const learned = [];
    const readyToRepeat = [];
    const notReadyToRepeat = [];
    deck.cards.forEach((card) => {
      const daysOfPause = Math.floor(
        (card.lastAnswerDate.getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      );
      const necessaryDaysOfPause = 2 ** deck.levelOfStudy;

      if (card.level === 1) {
        notStarted.push(card);
      } else if (card.level === 8) {
        learned.push(card);
      } else {
        if (daysOfPause >= necessaryDaysOfPause) {
          readyToRepeat.push(card);
        } else {
          notReadyToRepeat.push(card);
        }
      }
    });
    deck.notStarted = notStarted;
    deck.learned = learned;
    deck.readyToRepeat = readyToRepeat;
    deck.notReadyToRepeat = notReadyToRepeat;
  }
  return allUserDecks;
};

const Deck = model('Deck', deckSchema);

module.exports = Deck;
