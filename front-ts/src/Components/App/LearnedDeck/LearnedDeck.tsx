import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { DeckType, CardType } from '../../../redux/types/deck/deckTypes';

export default function LearnedDeck({ deckInGame }: { deckInGame: DeckType }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [position, setPosition] = useState(0);
  const dispatch = useDispatch();

  const resultOfAnswerHandler = async (card: CardType, remembered: boolean) => {
    setShowAnswer((pre) => !pre);
    // dispatch(resultOfAnswerSagaAC(card, remembered));
    setPosition((pre) =>
      pre < deckInGame.readyToRepeat.length - 1 ? (pre += 1) : pre
    );
  };

  return (
    <>
      <Card
        className="text-center "
        style={{ width: '500px', height: '400px' }}
      >
        <Card.Header>
          {position}/{deckInGame.readyToRepeat.length}
        </Card.Header>
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
            <Button
              variant="primary"
              onClick={() => setShowAnswer((pre) => !pre)}
            >
              Показать ответ
            </Button>
          )}
          {showAnswer && (
            <div>
              <Button
                style={{ width: '8rem' }}
                variant="secondary"
                onClick={() => setShowAnswer((pre) => !pre)}
              >
                Не вспомнил
              </Button>{' '}
              <Button
                style={{ width: '8rem' }}
                variant="success"
                onClick={() =>
                  resultOfAnswerHandler(
                    deckInGame.readyToRepeat[position],
                    true
                  )
                }
              >
                Вспомнил
              </Button>
            </div>
          )}
        </Card.Body>
        <Card.Footer className="d-flex text-muted">
          <Button
            variant="link"
            onClick={() => setPosition((pre) => (pre > 0 ? (pre -= 1) : pre))}
          >
            предыдущая карта
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}
