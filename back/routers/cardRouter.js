const router = require("express").Router();
const Card = require("../bd/cardShema");
const Deck = require("../bd/deckShema");
const { nanoid } = require("nanoid");

// Получить результат
// isLogin добавить!
router.route("/result").post(async (req, res) => {
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
    if (newLevelOfStudy < 2) newLevelOfStudy = 2;
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
router.route("/add").post(async (req, res) => {
  const { deckId, question, answer } = req.body;
  _id = nanoid();
  const newCard = {
    _id,
    question,
    answer,
    levelOfStudy: 1,
    lastAnswerDate: new Date(),
  };

  try {
    const deck = await Deck.findOne({ _id: deckId });
    deck.cards.push(newCard);
    await deck.save();
    return res.status(200).json({ newCard });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.route("/delete").post(async (req, res) => {
  const { deckId, cardId } = req.body;

  try {
    const deck = await Deck.findOne({ _id: deckId });
    deck.cards = deck.cards.filter((el) => el._id !== cardId);
    deck.save();
    return res.status(200).json(deck);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.route("/rename").post(async (req, res) => {
  const { deckId, cardId, question, answer } = req.body;
  try {
    const deck = await Deck.findOne({ _id: deckId });
    const arrCards = deck.cards.map((el) => {
      if (el._id == cardId) {
        el.question = question;
        el.answer = answer;
        return el;
      } else {
        return el;
      }
    });
    deck.cards = arrCards;

    deck.markModified("cards"); //
    await deck.save();

    return res.status(200).json(deck);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
