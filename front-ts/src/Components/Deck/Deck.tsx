import React from 'react';
import { DeckType } from '../../redux/types/deck/deckTypes';

export default function Deck({ deck }: { deck: DeckType }) {

  return (
    <div>
      <h1>{deck.userId}</h1>
    </div>
  );
}
