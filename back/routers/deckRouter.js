const Deck = require('../bd/deckShema');
const Card = require('../bd/cardShema');

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
    // const sortedByReadyForStudyCard = await Deck.sortByReadyForStudyCard(
    //   req.session.userId
    // );
    // return res.json({ sortedByReadyForStudyCard });
    const allDecks = [
      {
        title: 'Страны и столицы',
        private: true,
        userId: 'userIdExample',
        cards: [
          {
            question: 'question1Example',
            answer: 'answer1Example',
            lastAnswerDate: new Date(),
            levelOfStudy: 1,
          },
          {
            question: 'question2Example',
            answer: 'answer2Example',
            lastAnswerDate: new Date(),
            levelOfStudy: 2,
          },
        ],
      },
      {
        title: 'Страны и столицы',
        private: true,
        userId: 'userIdExample',
        cards: [
          {
            question: 'question1Example',
            answer: 'answer1Example',
            lastAnswerDate: new Date(),
            levelOfStudy: 1,
          },
          {
            question: 'question2Example',
            answer: 'answer2Example',
            lastAnswerDate: new Date(),
            levelOfStudy: 2,
          },
        ],
      },
      {
        title: 'Страны и столицы',
        private: true,
        userId: 'userIdExample',
        cards: [
          {
            question: 'question1Example',
            answer: 'answer1Example',
            lastAnswerDate: new Date(),
            levelOfStudy: 1,
          },
          {
            question: 'question2Example',
            answer: 'answer2Example',
            lastAnswerDate: new Date(),
            levelOfStudy: 2,
          },
        ],
      },
    ];
    return res.json({ allDecks });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
