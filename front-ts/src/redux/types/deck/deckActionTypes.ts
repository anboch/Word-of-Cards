import { AllDecksType, EditedDeck } from './deckTypes';
export type DeckActionTypes = 'DOWNLOAD_DECKS' | 'DOWNLOAD_DECKS_SAGA' 
|'THIS_DECK'| 'THIS_DECK_SAGA' | 'RENAME_TITLE_DECK' |'DELETE_CARD' |'SAVE_RENAME_DECK_SAGA'
|'SAVE_RENAME_DECK';

interface DeckAction {
  type: DeckActionTypes;
}

export interface DownloadDecksAction extends DeckAction {
  type: 'DOWNLOAD_DECKS';
  payload: AllDecksType;
  message?: string;
}

export interface DownloadDecksSagaAction extends DeckAction {
  type: 'DOWNLOAD_DECKS_SAGA';
}

//editedDeck

export interface ThisDeckAction extends DeckAction {
  type: 'THIS_DECK';
  payload: EditedDeck;
}

export interface ThisDeckSagaAction extends DeckAction {
  type: 'THIS_DECK_SAGA';
  payload:string;
}

//reneme title deck

export interface RenameDeckAction extends DeckAction {
  type: 'RENAME_TITLE_DECK';
  payload: string;
}

export interface DeleteCard extends DeckAction {
  type:'DELETE_CARD';
  payload:string
}

//save rename Deck 

export interface SaveRenameDeckSagaAction extends DeckAction {
  type: 'SAVE_RENAME_DECK_SAGA';
  payload: object;
}

export interface SaveRenameDeckAction extends DeckAction {
  type:'SAVE_RENAME_DECK';
  payload:object
}

export type DeckActions = DownloadDecksAction | DownloadDecksSagaAction 
|ThisDeckAction | ThisDeckSagaAction | RenameDeckAction |DeleteCard |SaveRenameDeckSagaAction
|SaveRenameDeckAction;
