import { AllDecksType } from './deckTypes';
export type DeckActionTypes = 'DOWNLOAD_DECKS' | 'DOWNLOAD_DECKS_SAGA';

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

export type DeckActions = DownloadDecksAction | DownloadDecksSagaAction;
