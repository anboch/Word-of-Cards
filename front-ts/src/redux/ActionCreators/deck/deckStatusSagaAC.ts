import {StatusDeckSagaAction, StatusDeckAction} from '../../types/deck/deckActionTypes'


export const deckStatusAC = (deckId:string): StatusDeckAction => ({
  type: 'STATUS_DECK',
  payload:deckId
});

export const deckStatusSagaAC = (deckId:string): StatusDeckSagaAction => ({
  type: "STATUS_DECK_SAGA",
  payload:deckId
});
