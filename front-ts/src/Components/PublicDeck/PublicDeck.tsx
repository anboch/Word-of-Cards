import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../redux/types/index';
import { useHistory } from 'react-router-dom';
import {
  Card,
  ListGroup,
  ListGroupItem,
  ProgressBar,
  Badge,
  Button,
} from 'react-bootstrap';
import { setDeckForGameAC } from '../../redux/ActionCreators/deck/setDeckForGameAC';
import { DeckType } from '../../redux/types/deck/deckTypes';

export default function Deck({ deck }: { deck: DeckType }) {
  const history = useHistory();
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();

  const deckId = deck._id;
  const copyDeck = (deckId: string) => {
    dispatch({ type: 'COPY_DECK_SAGA', payload: deckId });
  };
  const startGameHandler = async (deck: DeckType) => {
    dispatch(setDeckForGameAC(deck));
    history.push('/game');
  };
  return (
    <div>
      <Card
        style={{
          width: '18rem',
          // height: '25rem',
          borderRadius: '15px',
          margin: '2rem',
        }}
      >
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body className="d-flex justify-content-center">
          <Card.Title
            style={{
              height: '2rem',
              textAlign: 'center',
            }}
          >
            {deck.title}
          </Card.Title>
          {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="d-flex justify-content-center">
            Карт: {deck.cards.length}
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="d-flex justify-content-center flex-wrap">
          <Button
            style={{ margin: '0.25rem' }}
            variant="success"
            onClick={() => startGameHandler(deck)}
          >
            Добавить к себе
          </Button>{' '}
          <Button
            style={{ margin: '0.25rem' }}
            onClick={() => copyDeck(deckId)}
            variant="dark"
          >
            Подробнее
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
