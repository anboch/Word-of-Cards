export interface DeckType {
  title: string;
  _id: string;
  private: boolean;
  userId: string;
  notStarted: Array<Object>;
  learned: Array<Object>;
  readyToRepeat: Array<Object>;
  notReadyToRepeat: Array<Object>;
}

export type AllDecksType = DeckType[];
