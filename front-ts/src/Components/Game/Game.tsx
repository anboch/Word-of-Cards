import React, { useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { State } from '../../redux/types';
import LearnedDeck from '../App/LearnedDeck/LearnedDeck';

function Game() {
  const currentDeck = useSelector(
    (state: State) => state.deckReducer.currentDeck
  );

  return (
    <>
      <Container className="d-flex justify-content-center">
        {!currentDeck && <Spinner animation="border" variant="success" />}
        {currentDeck && (
          <LearnedDeck key={currentDeck._id} currentDeck={currentDeck} />
        )}
      </Container>
    </>
  );
}

export default Game;
