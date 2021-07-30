
import {DelDeckSagaAction, DelDeckAction} from '../../types/deck/deckActionTypes'
export const delDeckAC = (id:string): DelDeckAction => ({
  type: 'DELETE_DECK',
  payload:id
});

export const delDeckSagaAC = (id:string): DelDeckSagaAction => ({
  type: "DELETE_DECK_SAGA",
  payload:id
});
