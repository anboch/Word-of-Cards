import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { State } from '../../redux/types';
import Deck from '../Deck/Deck';

export default function DeckList() {
  const state = useSelector((state: State) => state);
  console.log('state:', state);

  return (
    <div>
      <Container
        className="d-flex justify-content-around flex-wrap"
        style={{ paddingTop: '2rem', minWidth: '20rem' }}
      >
        {state.deckReducer.allDecks.map((deck) => (
          <Deck key={deck._id} deck={deck} />
        ))}
      </Container>
    </div>
  );
}
