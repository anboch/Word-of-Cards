import { CardType } from "../card/cardTypes";

export interface DeckType {
  title: string;
  _id: string;
  private: boolean;
  userId: string;
  cards: Array<CardType>;
  notStarted: Array<Object>;
  learned: Array<Object>;
  readyToRepeat: Array<Object>;
  notReadyToRepeat: Array<Object>;
}

export type AllDecksType = DeckType[];

export type EditedDeck = DeckType
