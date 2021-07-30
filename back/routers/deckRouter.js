const Deck = require('../bd/deckShema');
const Card = require('../bd/cardShema');
const User = require('../bd/userShema');
const { nanoid } = require('nanoid');
const { isLogin, notLogin } = require('../middlewares/authMdw');

const router = require('express').Router();

// Новая колода
// isLogin добавить!
router.route('/new').post(async (req, res) => {
  const { title, private } = req.body;
  try {
    const newDeck = await Deck.create({
      title,
      private,
      userId: req.session.user._id,
    });
    return res.json({ newDeck });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Показать все публичные доски
// isLogin добавить!
router.route('/allpublic').get(async (req, res) => {
  // try {
  // console.log('req.session.user:', req.session.user);
  const allPublicDecks = await Deck.find({ private: false });
  if (req.session.user) {
    // отсортировать по лайкам!
    // decksWithClusteredCards.sort(
    //   (a, b) => b.readyToRepeat.length - a.readyToRepeat.length
    // );
    const allPublicStrangeDecks = allPublicDecks.filter(
      (deck) => deck.userId != req.session.user._id
    );
    return res.json({ allPublicDecks: allPublicStrangeDecks });
  } else {
    return res.json({ allPublicDecks });
  }
  // } catch (error) {
  //   res.status(500).json({ error });
  // }
});

// Показать все доски юзера
// isLogin добавить!
router.route('/all').get(async (req, res) => {
  // console.log('req.session.fakeTime2:', req.session);
  // const daysOfPause = Math.floor(
  //   (req.session.fakeTime - new Date().getTime()) / (1000 * 60 * 60 * 24)
  // );
  // console.log('daysOfPause1:', daysOfPause);
  try {
    // console.log('req.session.user._id:', req.session.user._id);
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

// Скопировать к себе публичную доску
// isLogin добавить!
router.route('/copy').post(isLogin, async (req, res) => {
  const { deckId } = req.body;
  try {
    const deckForCopy = await Deck.findOne({ _id: deckId });
    const withCreatStatisticCards = deckForCopy.cards.map((card) => {
      card._id = nanoid();
      card.levelOfStudy = 1;
      card.lastAnswerDate = new Date();
      return card;
    });

    const user = await User.findOne({ _id: req.session.user._id });
    console.log('user:', user);
    const newDeck = await new Deck({
      title: deckForCopy.title,
      userId: user._id,
      cards: withCreatStatisticCards,
    });
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
    const userDecks = await Deck.find({ userId: req.session.user._id });
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

router.route('/status').post(async (req, res) => {
  const { deckId } = req.body;
  try {
    const deck = await Deck.findOne({ _id: deckId });
    deck.private = !deck.private;
    deck.save();
    console.log(deck.private);
    res.status(200).json(deck);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
