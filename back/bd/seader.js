const fs = require('fs');
const Deck = require('./deckShema');
const Card = require('./cardShema');

const folder = './cards';

const seader = async () => {
  const readDirSync = fs.readdirSync(folder);

  for (let fileName of readDirSync) {
    const newDeck = new Deck({ title: fileName.split('.')[0] });
    const fileData = fs.readFileSync(`${folder}/${fileName}`, 'utf-8');
    const arrOfcards = fileData.split('\n');
    for (let card of arrOfcards) {
      const question = card.split('\t')[0];
      const answer = card.split('\t')[1];
      const randomLevel = Math.ceil(Math.random() * 8 + 0.001);
      const timeInterval = new Date() - new Date('2020-07-25');
      const randomLastAnswerDate =
        new Date() - Math.ceil(Math.random() * timeInterval);
      const newCard = new Card({
        question,
        answer,
        levelOfStudy: randomLevel,
        lastAnswerDate: new Date(randomLastAnswerDate),
      });
      newDeck.cards.push(newCard);
    }
    console.log('newDeck:', newDeck);
    // await newDeck.save();
  }
};

// seader();
