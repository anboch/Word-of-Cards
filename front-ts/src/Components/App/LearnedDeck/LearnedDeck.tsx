import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resultOfAnswerSagaAC } from '../../../redux/ActionCreators/card/resultOfAnswerSagaAC';
import { CardType } from '../../../redux/types/card/cardTypes';
import { DeckType } from '../../../redux/types/deck/deckTypes';

export default function LearnedDeck({ deckInGame }: { deckInGame: DeckType }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [position, setPosition] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const deckInGameId = deckInGame._id;
  const cardInGame = deckInGame.readyToRepeat[position];

  const resultOfAnswerHandler = (
    deckInGameId: string,
    cardInGame: CardType,
    remembered: boolean
  ) => {
    setShowAnswer(false);
    dispatch(resultOfAnswerSagaAC(deckInGameId, cardInGame, remembered));
    setPosition((pre) =>
      pre < deckInGame.readyToRepeat.length - 1 ? (pre += 1) : pre
    );
  };

  const goToPreviousCard = () => {
    setPosition((pre) => (pre > 0 ? (pre -= 1) : pre));
    setShowAnswer(false);
  };

  useEffect(() => {
    if (position === deckInGame.readyToRepeat.length - 1)
      history.push('/account');
  }, [position, deckInGame.readyToRepeat.length, history]);

  return (
    <>
      <Card
        className="text-center "
        style={{ width: '500px', height: '400px' }}
      >
        <Card.Header>{deckInGame.title}</Card.Header>
        <Card.Body className="d-flex align-items-center justify-content-between flex-column">
          {/* <Card.Title>Вопрос</Card.Title> */}
          <Card.Text>{deckInGame.readyToRepeat[position].question}</Card.Text>
          {showAnswer && (
            <Card.Text>
              <hr />
              {deckInGame.readyToRepeat[position].answer}
            </Card.Text>
          )}
          {!showAnswer && (
            <Button variant="primary" onClick={() => setShowAnswer(true)}>
              Показать ответ
            </Button>
          )}
          {showAnswer && (
            <div>
              <Button
                style={{ width: '8rem' }}
                variant="secondary"
                onClick={() =>
                  resultOfAnswerHandler(deckInGameId, cardInGame, false)
                }
              >
                Не вспомнил
              </Button>{' '}
              <Button
                style={{ width: '8rem' }}
                variant="success"
                onClick={() =>
                  resultOfAnswerHandler(deckInGameId, cardInGame, true)
                }
              >
                Вспомнил
              </Button>
            </div>
          )}
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between text-muted">
          <Button variant="link" onClick={goToPreviousCard}>
            предыдущая карта
          </Button>
          <div className="d-flex align-items-center">
            {position + 1}/{deckInGame.readyToRepeat.length}
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}
