
import {PoiskAction, PoiskSagaAction} from '../../types/deck/deckActionTypes'


export const poiskSagakAC = (poisk:string): PoiskAction => ({
  type: 'POISK',
  payload:poisk
});

export const poiskAC = (poisk:string): PoiskSagaAction => ({
  type: "POISK_SAGA",
  payload:poisk
});
