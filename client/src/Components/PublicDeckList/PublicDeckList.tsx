import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DeckList from '../DeckList/DeckList';
import { getPublicDecksSagaAC } from '../../redux/ActionCreators/deck/getPublicDecksSagaAC';
import { State } from '../../redux/types/index';
import PublicDeck from '../PublicDeck/PublicDeck';

export default function PublicDeckList() {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getPublicDecksSagaAC();
    dispatch(action);
  }, [dispatch]);

  const sortArr = state.deckReducer.allPublicDecks.filter(el => 
    el.title.toUpperCase().includes(state.deckReducer.poisk.toUpperCase()))
  
  return (
    <div className="glavDiv">
      <Container
        className="d-flex justify-content-around flex-wrap"
        style={{ paddingTop: '2rem', minWidth: '20rem' }}
      >
        {sortArr?.map((deck) => (
          <PublicDeck key={deck._id} deck={deck} />
        ))}
      </Container>
    </div>
  );
}
