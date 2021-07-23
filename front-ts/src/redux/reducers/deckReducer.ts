import { State } from '../types/index';
import { DeckActions } from '../types/deck/deckActionTypes';
import { AllDecksType } from '../types/deck/deckTypes';

const init: State['allDecks'] =[]

export const deckReducer = (
  state: State['allDecks']  = init,
  action: DeckActions
): State['allDecks'] => {
  switch (action.type) {
    case 'DOWNLOAD_DECKS':
const allDecksPayload: AllDecksType = action.payload
      return allDecksPayload
      
    default:
      return state;
  }
};
