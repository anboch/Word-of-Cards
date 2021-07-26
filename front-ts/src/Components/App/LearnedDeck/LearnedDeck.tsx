import React from 'react';
import { DeckType } from '../../../redux/types/deck/deckTypes';

export default function LearnedDeck({
  currentDeck,
}: {
  currentDeck: DeckType;
}) {
  return (
    <>
      <h1>LearnedDeck</h1>
      <div>{currentDeck.title}</div>
    </>
  );
}
