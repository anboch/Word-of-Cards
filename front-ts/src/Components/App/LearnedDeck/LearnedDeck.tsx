import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resultOfAnswerSagaAC } from '../../../redux/ActionCreators/card/resultOfAnswerSagaAC';
import { CardType } from '../../../redux/types/card/cardTypes';
import { DeckType } from '../../../redux/types/deck/deckTypes';

export default function LearnedDeck({ deckInGame }: { deckInGame: DeckType }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [newCardsMode, setNewCardsMode] = useState(false);
  const [position, setPosition] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const [cardsInGame, setCardsInGame] = useState(deckInGame.readyToRepeat);
  const deckInGameId = deckInGame._id;

  useEffect(() => {
    if (deckInGame.readyToRepeat.length === 0) setNewCardsMode(true);
  }, [deckInGame]);

  // почему не работает setCardsInGame?
  useEffect(() => {
    // console.log('newCardsMode:', newCardsMode);
    // console.log('cardsInGame1:', cardsInGame);
    // console.log('deckInGame.notStarted:', deckInGame.notStarted);
    if (newCardsMode) {
      // console.log('if=====');
      setCardsInGame(deckInGame.notStarted);
    }
    // console.log('cardsInGame2:', cardsInGame);
  }, [newCardsMode, cardsInGame, deckInGame]);

  const resultOfAnswerHandler = (
    deckInGameId: string,
    cardInGame: CardType,
    remembered: boolean
  ) => {
    console.log('cardsInGame:', cardsInGame);
    setShowAnswer(false);
    dispatch(resultOfAnswerSagaAC(deckInGameId, cardInGame, remembered));
    setPosition((pre) => (pre <= cardsInGame.length - 1 ? (pre += 1) : pre));
  };

  const goToPreviousCard = () => {
    setPosition((pre) => (pre > 0 ? (pre -= 1) : pre));
    setShowAnswer(false);
  };
  // console.log('cardsInGame46:', cardsInGame);
  useEffect(() => {
    // if (newCardsMode) setCardsInGame(deckInGame.notStarted);
    if (newCardsMode && position === deckInGame.notStarted.length) {
      history.push('/account');
    }
    if (position === cardsInGame.length) {
      setNewCardsMode(true);
      setPosition(0);
    }
    // console.log('newCardsMode:', newCardsMode);
    // console.log('position:', position);
    // console.log('cardsInGame:', cardsInGame);
  }, [position, cardsInGame, history, newCardsMode, deckInGame]);

  return (
    <>
      <Card
        className="text-center "
        style={{ width: '500px', height: '400px' }}
      >
        <Card.Header>{deckInGame.title}</Card.Header>
        <Card.Body className="d-flex align-items-center justify-content-between flex-column">
          {/* <Card.Title>Вопрос</Card.Title> */}
          <Card.Text>{cardsInGame[position]?.question}</Card.Text>
          {showAnswer && (
            <Card.Text>
              <hr />
              {cardsInGame[position]?.answer}
            </Card.Text>
          )}
          {!showAnswer && (
            <Button variant="primary" onClick={() => setShowAnswer(true)}>
              Показать ответ
            </Button>
          )}
          {!newCardsMode && showAnswer && (
            <div>
              <Button
                style={{ width: '8rem' }}
                variant="secondary"
                onClick={() =>
                  resultOfAnswerHandler(
                    deckInGameId,
                    cardsInGame[position],
                    false
                  )
                }
              >
                Не вспомнил
              </Button>{' '}
              <Button
                style={{ width: '8rem' }}
                variant="success"
                onClick={() =>
                  resultOfAnswerHandler(
                    deckInGameId,
                    cardsInGame[position],
                    true
                  )
                }
              >
                Вспомнил
              </Button>
            </div>
          )}
          {newCardsMode && showAnswer && (
            <div>
              <Button
                style={{ width: '11rem' }}
                variant="success"
                onClick={() =>
                  resultOfAnswerHandler(
                    deckInGameId,
                    cardsInGame[position],
                    true
                  )
                }
              >
                Следующая карта
              </Button>
            </div>
          )}
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between text-muted">
          <Button variant="link" onClick={goToPreviousCard}>
            предыдущая карта
          </Button>
          <div className="d-flex align-items-center">
            {newCardsMode && (
              <span style={{ marginRight: '1rem' }}>новые карточки</span>
            )}
            {position + 1}/{cardsInGame?.length}
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}
