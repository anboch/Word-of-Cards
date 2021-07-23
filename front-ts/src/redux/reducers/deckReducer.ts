import { State } from '../types/index';
import { DeckActions } from '../types/deck/deckActionTypes';

const init: State = {
  allDecks: [],
};

export const deckReducer = (
  state: State = init,
  action: DeckActions
): State => {
  switch (action.type) {
    case 'DOWNLOAD_DECKS':
      return {
        ...state,
        allDecks: action.payload,
      };
    default:
      return state;
  }
};
