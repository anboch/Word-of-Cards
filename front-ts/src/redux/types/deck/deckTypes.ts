import { CardType } from "../card/cardTypes";

export interface DeckType {
  title: string;
  _id: string;
  private: boolean;
  userId: string;
  cards: CardType[];
  notStarted: CardType[];
  learned: CardType[];
  readyToRepeat: CardType[];
  notReadyToRepeat: CardType[];
}

export type AllDecksType = DeckType[];

export type EditedDeck = DeckType
