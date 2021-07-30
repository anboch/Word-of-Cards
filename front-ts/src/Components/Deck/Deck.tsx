import React, { useEffect,useState } from 'react';
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
import {delDeckSagaAC} from '../../redux/ActionCreators/deck/delDeckAC'

export default function Deck({ deck }: { deck: DeckType }) {
  const [del,setDel] = useState(true)
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
  const delDeck = (id:any) =>{

dispatch(delDeckSagaAC(id))
setDel(true)
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
          <Badge pill bg="secondary" style={{cursor:"pointer"}} onClick={deckStatus}>
          Приватная колода
          </Badge>
           :
            <Badge pill bg="primary" style={{cursor:"pointer"}} onClick={deckStatus}>
             Публичная колода
           </Badge>
            }
          </ListGroupItem>
        </ListGroup>
        {del ? 
        <Card.Body>
          {(deck.readyToRepeat?.length > 0 || deck.notStarted?.length > 0) && (
            <Button variant="success" onClick={() => startGameHandler(deck)}>
              Учить
            </Button>
          )}{' '}
          <Button onClick={() => thisDeck(deck)} variant="dark">
            Редактировать
          </Button>
          <img onClick={()=>setDel(false)} style={{cursor:"pointer"}} className='del' src='data:image/jpeg;base64,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'/>
          
        </Card.Body>
        :<div><h5>Вы деиствительно хотите удалить колоду?</h5>
        <div className='buttonDel'>
        <Button onClick={() => setDel(true)} variant="dark">
       Отменить
     </Button>
     <Button onClick={() => delDeck(deck._id)} variant="danger">
       Удалить
     </Button>
     </div>
     </div>}
      </Card>
    </div>
  );
}
