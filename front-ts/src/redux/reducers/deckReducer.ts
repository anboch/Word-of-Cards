import { State } from '../types/index';
import { DeckActions } from '../types/deck/deckActionTypes';

const init: State = {
  deckReducer: { allDecks: [] },
};

export const deckReducer = (
  state: State = init,
  action: DeckActions
): State => {
  switch (action.type) {
    case 'DOWNLOAD_DECKS':
      return {
        ...state,
        deckReducer: { ...state.deckReducer, allDecks: action.payload },
      };
    default:
      return state;
  }
};
