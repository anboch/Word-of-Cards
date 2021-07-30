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

deckSchema.statics.clusteringCardsByStatus = async function (userId) {
  const allUserDecks = await this.find({ userId }).lean();
  for (let deck of allUserDecks) {
    const notStarted = [];
    const learned = [];
    const readyToRepeat = [];
    const notReadyToRepeat = [];
    deck.cards.forEach((card) => {
      if (card) {
        let lastAnswerDate = card.lastAnswerDate;
        if (!typeof lastAnswerDate === 'string') {
          lastAnswerDate = Date.parse(card.lastAnswerDate);
        }
        // const daysOfPause = Math.floor(
        //   (sessionTime - lastAnswerDate.getTime()) / (1000 * 60 * 60 * 24)
        // );
        // console.log('daysOfPause:', daysOfPause);
        const daysOfPause = Math.floor(
          (new Date().getTime() - lastAnswerDate.getTime()) /
            (1000 * 60 * 60 * 24)
        );
        const necessaryDaysOfPause = 2 ** card.levelOfStudy;
        if (card.levelOfStudy === 1) {
          notStarted.push(card);
        } else if (card.levelOfStudy === 8) {
          learned.push(card);
        } else {
          if (daysOfPause >= necessaryDaysOfPause) {
            readyToRepeat.push(card);
          } else {
            notReadyToRepeat.push(card);
          }
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
