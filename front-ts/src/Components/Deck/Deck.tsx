import React from 'react';
import {
  Card,
  ListGroup,
  ListGroupItem,
  ProgressBar,
  Badge,
  Button,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DeckType } from '../../redux/types/deck/deckTypes';

export default function Deck({ deck }: { deck: DeckType }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const startGameHandler = async (deckId) => {
    dispatch(startGameSagaAC(deckId));
    history.push('/game');
  };
  return (
    <div>
      <Card style={{ width: '18rem', borderRadius: '15px', margin: '2rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body>
          <Card.Title>{deck.title}</Card.Title>
          {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            {deck.learned.length} из {deck.cards.length} выучено
          </ListGroupItem>
          <ListGroupItem>
            {deck.notReadyToRepeat.length} на запоминании
          </ListGroupItem>
          <ListGroupItem>
            {deck.readyToRepeat.length} готовы к повторению
          </ListGroupItem>
          <ListGroupItem>
            <ProgressBar>
              <ProgressBar
                variant="success"
                now={(deck.learned.length / deck.cards.length) * 100}
              />
              <ProgressBar
                variant="info"
                now={(deck.notReadyToRepeat.length / deck.cards.length) * 100}
              />
              <ProgressBar
                variant="warning"
                now={(deck.readyToRepeat.length / deck.cards.length) * 100}
              />
            </ProgressBar>
          </ListGroupItem>
          <ListGroupItem>
            {deck.private && (
              <Badge pill bg="secondary">
                Приватная колода
              </Badge>
            )}
            {!deck.private && (
              <Badge pill bg="primary">
                Публичная колода
              </Badge>
            )}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="success" onClick={() => startGameHandler(deck._id)}>
            Учить
          </Button>{' '}
          <Button variant="dark">Редактировать</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
