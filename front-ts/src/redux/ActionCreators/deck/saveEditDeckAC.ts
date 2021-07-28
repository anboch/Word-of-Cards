import {SaveRenameDeckAction, SaveRenameDeckSagaAction} from '../../types/deck/deckActionTypes'


export const saveEditDeckAC = (deck:object): SaveRenameDeckAction => ({
  type: 'SAVE_RENAME_DECK',
  payload:deck
});

export const saveEditDeckSagaAC = (deck:object): SaveRenameDeckSagaAction => ({
  type: "SAVE_RENAME_DECK_SAGA",
  payload:deck
});
