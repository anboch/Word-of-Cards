const fs = require('fs');
const Deck = require('./deckShema');
const Card = require('./cardShema');
const User = require('./userShema');
const { nanoid } = require('nanoid');

const seader = async (folder) => {
  // const folder = './bd/cards';
  const readDirSync = fs.readdirSync(folder);
  const userOwnerOfDeck = await User.findOne({ login: 'mouse' });
  for (let fileName of readDirSync) {
    const newDeck = new Deck({
      title: fileName.split('.')[0],
      userId: userOwnerOfDeck._id,
    });
    const fileData = fs.readFileSync(`${folder}/${fileName}`, 'utf-8');
    const arrOfcards = fileData.split('\n');
    for (let card of arrOfcards) {
      const question = card.split('\t')[0];
      const answer = card.split('\t')[1];
      const randomLevel = Math.ceil(Math.random() * 8 + 0.001);
      const timeInterval = new Date() - new Date('2020-07-25');
      const randomLastAnswerDate =
        new Date() - Math.ceil(Math.random() * timeInterval);
      _id = nanoid();
      const newCard = {
        _id,
        question,
        answer,
        levelOfStudy: randomLevel,
        lastAnswerDate: new Date(randomLastAnswerDate),
      };
      newDeck.cards.push(newCard);
    }
    await newDeck.save();
  }
};

// seader();
module.exports = { seader };
