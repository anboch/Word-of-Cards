
import {DeckType} from '../../types/deck/deckTypes'
import {AddDeckSagaAction, AddDeckAction} from '../../types/deck/deckActionTypes'


export const addDeckAC = (deck:DeckType): AddDeckAction => ({
  type: 'ADD_DECK',
  payload:deck
});

export const addDeckSagaAC = (title:string): AddDeckSagaAction => ({
  type: "ADD_DECK_SAGA",
  payload:title
});
