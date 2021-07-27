const Card = require('../bd/cardShema');

const router = require('express').Router()

router.route('/').post(async (req, res) => {
  const { question, answer } = req.body;
  
  try {
    const newCard = await Card.create({
      question,
      answer
    });
    return res.status(200).json({newCard} );
  } catch (error) {
    res.status(500).json({ error });
  }
});


module.exports = router;
