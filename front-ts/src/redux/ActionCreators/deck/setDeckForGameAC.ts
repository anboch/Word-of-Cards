import { SetDeckForGameAction } from '../../types/deck/deckActionTypes';
import { DeckType } from '../../types/deck/deckTypes';

export const setDeckForGameAC = (deck: DeckType): SetDeckForGameAction => ({
  type: 'SET_DECK_FOR_GAME',
  payload: deck,
});
