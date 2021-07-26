export interface DeckType {
  title: string;
  _id: string;
  private: boolean;
  userId: string;
  cards: Array<Object>;
  notStarted: Array<Object>;
  learned: Array<Object>;
  readyToRepeat: Array<Object>;
  notReadyToRepeat: Array<Object>;
}

export type AllDecksType = DeckType[];

export type EditedDeck = DeckType
