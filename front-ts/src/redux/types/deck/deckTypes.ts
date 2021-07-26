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

export interface CardType {
  _id: string;
  question: string;
  answer: string;
  lastAnswerDate: Date;
  levelOfStudy: number;
}

export type AllDecksType = DeckType[];
