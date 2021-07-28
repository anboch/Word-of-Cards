import {SaveRenameDeckAction, SaveRenameDeckSagaAction} from '../../types/deck/deckActionTypes'


export const saveEditDeckAC = (newTitle:string): SaveRenameDeckAction => ({
  type: 'RENAME_TITLE_DECK',
  payload:newTitle
});

export const saveEditDeckSagaAC = (deckId:string,newTitle:string): SaveRenameDeckSagaAction => ({
  type: "SAVE_RENAME_DECK_SAGA",
  payload:{deckId, newTitle}
});
