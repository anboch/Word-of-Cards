export interface DeckType {
  title: string;
  _id: string;
  private: boolean;
  userId: string;
}

export type AllDecksType = DeckType[];
