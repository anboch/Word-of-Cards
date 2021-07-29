import React, { useEffect } from 'react';
import './Deck.css'
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
import {deckStatusSagaAC} from '../../redux/ActionCreators/deck/deckStatusSagaAC'

export default function Deck({ deck }: { deck: DeckType }) {
  const history = useHistory();
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const thisDeck = (deck: DeckType) => {
    dispatch({ type: 'THIS_DECK', payload: deck });
    history.push('/edit');
  };
  const startGameHandler = async (deck: DeckType) => {
    dispatch(setDeckForGameAC(deck));
    history.push('/game');
  };
  useEffect(()=>{

  },[dispatch])
  const deckStatus  = () => {
    dispatch(deckStatusSagaAC(deck._id))
  }
  
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
        <Card.Body>
          <Card.Title
            style={{
              height: '2rem',
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
          <ListGroupItem>
            <span
              style={{
                color: '#198754',
              }}
            >
              {deck.learned?.length}
            </span>{' '}
            из {deck.cards.length} выучено
          </ListGroupItem>
          <ListGroupItem>
            {deck.notReadyToRepeat?.length} на запоминании
          </ListGroupItem>
          <ListGroupItem>
            <span
              style={{
                color: '#0CCAF0',
              }}
            >
              {deck.notStarted?.length}
            </span>{' '}
            новых
          </ListGroupItem>
          <ListGroupItem>
            <span
              style={{
                color: '#FFC107',
              }}
            >
              {deck.readyToRepeat?.length}
            </span>{' '}
            готовы к повторению
          </ListGroupItem>
          <ListGroupItem>
            <ProgressBar>
              <ProgressBar
                variant="success"
                now={(deck.learned?.length / deck.cards.length) * 100}
              />
              <ProgressBar
                variant="info"
                now={(deck.notStarted?.length / deck.cards.length) * 100}
              />
              <ProgressBar
                variant="warning"
                now={(deck.readyToRepeat?.length / deck.cards.length) * 100}
              />
            </ProgressBar>
          </ListGroupItem>
          <ListGroupItem className='statusDeck'>
            {deck.private ? 
          <Badge pill bg="secondary" onClick={deckStatus}>
          Приватная колода
          </Badge>
           :
            <Badge pill bg="primary" onClick={deckStatus}>
             Публичная колода
           </Badge>
            }
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          {(deck.readyToRepeat?.length > 0 || deck.notStarted?.length > 0) && (
            <Button variant="success" onClick={() => startGameHandler(deck)}>
              Учить
            </Button>
          )}{' '}
          <Button onClick={() => thisDeck(deck)} variant="dark">
            Редактировать
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
