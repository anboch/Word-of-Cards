import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux/types';
import Deck from '../Deck/Deck';

export default function DeckList() {
  const state = useSelector((state: State) => state);
  console.log('state:', state);

  return (
    <div>
      {state.deckReducer.allDecks.map((deck) => (
        <Deck key={deck._id} deck={deck} />
      ))} 
    </div>
  );
}
