import { State } from '../types/index';
import { DeckActions } from '../types/deck/deckActionTypes';
import { AllDecksType, DeckType } from '../types/deck/deckTypes';

const init: State['deckReducer'] = { allDecks: [] };

export const deckReducer = (
  deckReducer: State['deckReducer'] = init,
  action: DeckActions
): State['deckReducer'] => {
  switch (action.type) {
    case 'DOWNLOAD_DECKS':
      const allDecksPayload: AllDecksType = action.payload;
      return { ...deckReducer, allDecks: allDecksPayload };
    case 'GET_DECK':
      const deckPayload: DeckType = action.payload;
      return { ...deckReducer, deckInGame: deckPayload };
    case 'SET_DECK_FOR_GAME':
      return { ...deckReducer, deckInGame: action.payload };
    default:
      return deckReducer;
  }
};
