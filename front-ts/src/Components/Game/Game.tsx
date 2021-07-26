import React, { useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { State } from '../../redux/types';
import LearnedDeck from '../App/LearnedDeck/LearnedDeck';

function Game() {
  const deckInGame = useSelector(
    (state: State) => state.deckReducer.deckInGame
  );

  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100%', position: 'absolute' }}
      >
        {!deckInGame ? (
          <Spinner animation="border" variant="success" />
        ) : (
          <LearnedDeck key={deckInGame._id} deckInGame={deckInGame} />
        )}
      </Container>
    </>
  );
}

export default Game;
