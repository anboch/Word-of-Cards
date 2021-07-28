import { AllDecksType, EditedDeck,  DeckType} from '../types/deck/deckTypes';

export interface User {
  _id: string;
  login: string;
  email: string;
  password: string;
}

export interface State {
  deckReducer: {
    allDecks: AllDecksType;
    editedDeck: EditedDeck;
    deckInGame?: DeckType;
  };
  userReducer: {
    user: User;
  };
}
