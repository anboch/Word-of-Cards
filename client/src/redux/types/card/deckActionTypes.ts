import { CardType } from './cardTypes';

export type CardActionTypes = 'SEND_RESULT_ANSWER' | 'SEND_RESULT_ANSWER_SAGA';

interface CardAction {
  type: CardActionTypes;
}

// export interface ResultOfAnswerAction extends CardAction {
//   type: 'SEND_RESULT_ANSWER';
//   payload: CardType;
// }

export interface ResultOfAnswerSagaAction extends CardAction {
  type: 'SEND_RESULT_ANSWER_SAGA';
  payload: { deckInGameId: string; cardInGame: CardType; remembered: boolean };
}

export type CardActions = ResultOfAnswerSagaAction;
