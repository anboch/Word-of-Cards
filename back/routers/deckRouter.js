const Deck = require('../bd/deckShema');
const Card = require('../bd/cardShema');
const User = require('../bd/userShema');

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
    // заглушку убрать!
    const userOwnerOfDeck = await User.findOne({ login: 'Andrey' });
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

router.route('/saveDeck').post(async (req, res) => {
  const {saveDeck} = req.body;
  try{
    const renameDeck = await Deck.findOne({_id:saveDeck._id})
    renameDeck = saveDeck
     await renameDeck.save()
      return res.sendStatus(200)
    
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
