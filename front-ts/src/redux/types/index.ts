import { AllDecksType } from '../types/deck/deckTypes';

export interface User {
  _id: string;
  login: string;
  email: string;
  password: string;
}

export interface State {
  allDecks: AllDecksType;
  user:User
}
