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

deckSchema.static.sortByReadyForStudyCard = async (userId) => {
  const allUserDecks = await this.find({ userId });
  let allUserDecksWithInfoOfDelay = [];
  for (let deck of allUserDecks) {
    deck.cards.forEach((card) => {
      const daysOfPause = Math.floor(
        (card.lastAnswerDate.getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      );
      const daysOfDelay = daysOfPause - 2 ** deck.levelOfStudy;
      card.daysOfDelay = daysOfDelay;
      allUserDecksWithInfoOfDelay.push(card);
    });
  }
  const sortDecks = allUserDecksWithInfoOfDelay.sort(
    (a, b) => b.daysOfDelay - a.daysOfDelay
  );
  return sortDecks;
};

const Deck = model('Deck', deckSchema);

module.exports = Deck;
