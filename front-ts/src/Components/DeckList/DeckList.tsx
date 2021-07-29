import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { State } from '../../redux/types';
import Deck from '../Deck/Deck';
import './Deck.css'

export default function DeckList() {
  const state = useSelector((state: State) => state);



const sortArr = state.deckReducer.allDecks.filter(el => 
  el.title.toUpperCase().includes(state.deckReducer.poisk.toUpperCase()))

  return (
    <div>
     
      <Container
        className="d-flex justify-content-around flex-wrap"
        style={{ paddingTop: '2rem', minWidth: '20rem' }}
      >
       {sortArr.map(deck=> <Deck key={deck._id} deck={deck} />)}
    
      </Container>
    </div>
  );
}
