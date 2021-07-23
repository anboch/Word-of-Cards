export interface DeckType {
  _id: string;
  private: boolean;
  userId: string;
}

export type AllDecksType = DeckType[];
