import { AllDecksType, DeckType } from './deckTypes';
export type DeckActionTypes =
  | 'DOWNLOAD_DECKS'
  | 'DOWNLOAD_DECKS_SAGA'
  | 'GET_DECK'
  | 'GET_DECK_SAGA';

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

export interface GetDeckAction extends DeckAction {
  type: 'GET_DECK';
  payload: DeckType;
}

export interface GetDeckSagaAction extends DeckAction {
  type: 'GET_DECK_SAGA';
  payload: string;
}

export type DeckActions =
  | DownloadDecksAction
  | DownloadDecksSagaAction
  | GetDeckAction
  | GetDeckSagaAction;
