import { CardType } from '../card/cardTypes';
import { AllDecksType, EditedDeck, DeckType } from './deckTypes';
export type DeckActionTypes = 'DOWNLOAD_DECKS' | 'DOWNLOAD_DECKS_SAGA' 
|'THIS_DECK'| 'THIS_DECK_SAGA' | 'RENAME_TITLE_DECK' |'DELETE_CARD' |'SAVE_RENAME_DECK_SAGA'
|'SAVE_RENAME_DECK'|'ADD_CARD'|'RENAME_CARD'| 'RENAME_CARD_SAGA'
| 'DOWNLOAD_DECKS'
| 'DOWNLOAD_DECKS_SAGA'
| 'GET_DECK'
| 'GET_DECK_SAGA'
| 'SET_DECK_FOR_GAME'|'DELETE_CARD_SAGA'|'STATUS_DECK_SAGA'|'STATUS_DECK'| 'GET_PUBLIC_DECKS'
| 'GET_PUBLIC_DECKS_SAGA'
| 'COPY_DECK'
| 'COPY_DECK_SAGA'  | 'SET_DECK_FOR_GAME'|'ADD_DECK'|'ADD_DECK_SAGA'

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

export interface GetPublicDecksAction extends DeckAction {
  type: 'GET_PUBLIC_DECKS';
  payload: AllDecksType;
  message?: string;
}

export interface GetPublicDecksSagaAction extends DeckAction {
  type: 'GET_PUBLIC_DECKS_SAGA';
}

export interface CopyDeckAction extends DeckAction {
  type: 'COPY_DECK';
  payload: DeckType;
}

export interface CopyDeckSagaAction extends DeckAction {
  type: 'COPY_DECK_SAGA';
  payload: string;
}

//editedDeck

export interface ThisDeckAction extends DeckAction {
  type: 'THIS_DECK';
  payload: EditedDeck;
}

export interface ThisDeckSagaAction extends DeckAction {
  type: 'THIS_DECK_SAGA';
  payload: string;
}

//reneme title deck

export interface RenameDeckAction extends DeckAction {
  type: 'RENAME_TITLE_DECK';
  payload: string;
}
// delete card
export interface DeleteCard extends DeckAction {
  type: 'DELETE_CARD';
  payload: string;
}

export interface DeleteCardSagaAction extends DeckAction {
  type: 'DELETE_CARD_SAGA';
  payload: {
    deckId: string;
    cardId: string;
  };
}

//save rename edit Deck

export interface SaveRenameDeckSagaAction extends DeckAction {
  type: 'SAVE_RENAME_DECK_SAGA';
  payload: { deckId: string; newTitle: string };
}

export interface SaveRenameDeckAction extends DeckAction {
  type: 'RENAME_TITLE_DECK';
  payload: string;
}
// status deck
export interface StatusDeckSagaAction extends DeckAction {
  type:'STATUS_DECK_SAGA';
  payload:string
}

export interface StatusDeckAction extends DeckAction {
  type:'STATUS_DECK';
  payload:string
}
//add deck
export interface AddDeckSagaAction extends DeckAction {
  type:'ADD_DECK_SAGA';
  payload:string
}

export interface AddDeckAction extends DeckAction {
  type:'ADD_DECK';
  payload:DeckType
}
// add card in deck
export interface AddCardAction extends DeckAction {
  type: 'ADD_CARD';
  payload: CardType;
}
//rename card
export interface RenameCardAction extends DeckAction {
  type: 'RENAME_CARD';
  payload: {
    question: string;
    answer: string;
    _id: string;
  };
}

export interface RenameCardSagaAction extends DeckAction {
  type: 'RENAME_CARD_SAGA';
  payload: {
    question: string;
    answer: string;
    _id: string;
  };
}

export interface GetDeckAction extends DeckAction {
  type: 'GET_DECK';
  payload: DeckType;
}

export interface GetDeckSagaAction extends DeckAction {
  type: 'GET_DECK_SAGA';
  payload: string;
}

export interface SetDeckForGameAction extends DeckAction {
  type: 'SET_DECK_FOR_GAME';
  payload: DeckType;
}

export type DeckActions = DownloadDecksAction | DownloadDecksSagaAction 
|ThisDeckAction | ThisDeckSagaAction | RenameDeckAction |DeleteCard |SaveRenameDeckSagaAction
|SaveRenameDeckAction|AddCardAction |RenameCardAction|RenameCardSagaAction
| DownloadDecksAction
| DownloadDecksSagaAction
| GetDeckAction
| GetDeckSagaAction
| SetDeckForGameAction
|DeleteCardSagaAction
|StatusDeckAction
|StatusDeckSagaAction| GetPublicDecksAction
| GetPublicDecksSagaAction
| CopyDeckAction
| CopyDeckSagaAction|AddDeckAction
|AddDeckSagaAction
