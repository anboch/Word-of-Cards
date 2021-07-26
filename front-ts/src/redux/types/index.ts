import { AllDecksType, EditedDeck } from '../types/deck/deckTypes';

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
  };
  userReducer: {
    user: User;
  };
}
