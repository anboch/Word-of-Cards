import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../redux/types';
import Deck from './Deck';

export default function DeckList() {
  const allDecks = useSelector((state: State) => {
    return state.allDecks;
  });

  return (
    <div>
      {allDecks?.map((deck) => (
        <Deck key={deck._id} deck={deck} />
      ))}
    </div>
  );
}
