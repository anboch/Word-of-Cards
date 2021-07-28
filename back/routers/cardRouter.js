const router = require('express').Router();
const Card = require('../bd/cardShema');
const Deck = require('../bd/deckShema');


// Получить результат
// isLogin добавить!
router.route('/result').post(async (req, res) => {
  const { deckInGameId, cardInGame, remembered } = req.body;
  let newLevelOfStudy = 0;
  if (remembered) {
    newLevelOfStudy = cardInGame.levelOfStudy + 1;
  } else {
    const daysOfPause = Math.floor(
      (new Date().getTime() - Date.parse(cardInGame.lastAnswerDate)) /
        (1000 * 60 * 60 * 24)
    );
    const necessaryDaysOfPause = 2 ** cardInGame.levelOfStudy;
    const delay = daysOfPause - necessaryDaysOfPause;
    newLevelOfStudy = cardInGame.levelOfStudy - Math.ceil(Math.log2(delay)) - 1;
    if (newLevelOfStudy < 1) newLevelOfStudy = 1;
  }
  try {
    const findedDeck = await Deck.findOne({ _id: deckInGameId });
    const newCardsArr = findedDeck.cards.map((card) => {
      if (card._id.toString() === cardInGame._id) {
        card.levelOfStudy = newLevelOfStudy;
        card.lastAnswerDate = new Date();
      }
      return card;
    });
    await Deck.findByIdAndUpdate(deckInGameId, { cards: newCardsArr });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error });
  }
});
router.route('/').post(async (req, res) => {
  const { question, answer } = req.body;
  
  try {
    const newCard = await Card.create({
      question,
      answer
    });
    return res.status(200).json({newCard} );

module.exports = router;
