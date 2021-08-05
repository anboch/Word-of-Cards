import { AllDecksType, EditedDeck, DeckType } from '../types/deck/deckTypes';

export interface User {
  _id: string;
  login: string;
  email: string;
  password: string;
}

export interface State {
  deckReducer: {
    allPublicDecks: AllDecksType;
    copiedDecks: AllDecksType;
    allDecks: AllDecksType;
    editedDeck: EditedDeck;
    deckInGame?: DeckType;
    poisk:string;
  };
  userReducer: {
    user: User;
  };
}
