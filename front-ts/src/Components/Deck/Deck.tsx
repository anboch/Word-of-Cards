import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {State} from '../../redux/types/index'
import {useHistory} from 'react-router-dom'
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
  const history = useHistory()
  const state = useSelector((state:State) => state)
  const dispatch = useDispatch()

  const thisDeck = (deck:DeckType) => {
  dispatch({type:'THIS_DECK', payload:deck})
  history.push('/edit')
  }
  const startGameHandler = async (deck: DeckType) => {
    dispatch(setDeckForGameAC(deck));
    history.push('/game');
  };
  return (
    <div>
      <Card
        style={{
          width: '18rem',
          height: '23rem',
          borderRadius: '15px',
          margin: '2rem',
        }}
      >
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
          <Button variant="success" onClick={() => startGameHandler(deck)}>
            Учить
          </Button>{' '}
          <Button onClick={() => thisDeck(deck)} variant="dark">Редактировать</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
