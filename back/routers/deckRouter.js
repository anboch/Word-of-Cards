const Deck = require('../bd/deckShema');
const Card = require('../bd/cardShema');
const User = require('../bd/userShema');
const { nanoid } = require('nanoid');

const router = require('express').Router();

// Новая колода
// isLogin добавить!
router.route('/new').post(async (req, res) => {
  const { title, private } = req.body;
  try {
    const newDeck = await Deck.create({
      title,
      private,
      userId: req.session.userId,
    });
    return res.json({ newDeck });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Новая карта
// isLogin добавить!
router.route('/newCard').post(async (req, res) => {
  const { _id, card } = req.body;
  try {
    const deck = await Deck.find({ _id });
    if (deck.userId === req.session.userId) {
      const newCard = new Card();
      deck.cards.push(newCard);
      await deck.save();
      return res.json({ deck });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Показать все доски юзера
// isLogin добавить!
router.route('/all').get(async (req, res) => {
  try {
    // заглушку убрать и заменить на req.session.user._id!
    const userOwnerOfDeck = await User.findOne({ _id: req.session.user._id });
    const decksWithClusteredCards = await Deck.clusteringCardsByStatus(
      userOwnerOfDeck._id
    );
    decksWithClusteredCards.sort(
      (a, b) => b.readyToRepeat.length - a.readyToRepeat.length
    );
    return res.json({ decksWithClusteredCards });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Показать все публичные доски
// isLogin добавить!
router.route('/allpublic').get(async (req, res) => {
  try {
    const allPublicDecks = await Deck.find({ private: false });
    // отсортировать по лайкам!
    // decksWithClusteredCards.sort(
    //   (a, b) => b.readyToRepeat.length - a.readyToRepeat.length
    // );
    return res.json({ allPublicDecks });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Скопировать к себе публичную доску
// isLogin добавить!
router.route('/copy').post(async (req, res) => {
  const { deckId } = req.body;
  console.log('req.body:', req.body);

  try {
    const deckForCopy = await Deck.findOne({ _id: deckId });
    console.log('deckForCopy:', deckForCopy);
    const withCreatStatisticCards = deckForCopy.cards.map((card) => {
      card._id = nanoid();
      card.levelOfStudy = 1;
      card.lastAnswerDate = new Date();
      return card;
    });

    console.log('withCreatStatisticCards:', withCreatStatisticCards[0]);
    const user = await User.findOne({ _id: req.session.user._id });
    const newDeck = await new Deck({
      title: deckForCopy.title,
      userId: user._id,
      cards: withCreatStatisticCards,
    });
    console.log('newDeck:', newDeck);
    await newDeck.save();
    return res.json({ newDeck });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Вернуть одну доску по id
// isLogin добавить!
router.route('/').post(async (req, res) => {
  try {
    // заглушку убрать и заменить на req.session.user._id!
    const userDecks = await Deck.find({ userId: '60fbe244a204e748dc39129c' });
    const deck = userDecks.find(
      (deck) => deck._id.toString() === req.body.deckId
    );
    return res.json({ deck });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.route('/renameTitle').post(async (req, res) => {
  try {
    const { deckId, newTitle } = req.body;
    const deck = await Deck.findOne({ _id: deckId });
    deck.title = newTitle;
    await deck.save();
    res.status(200).json(deck);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
