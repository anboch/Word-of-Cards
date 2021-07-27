import { State } from '../types/index';
import { DeckActions } from '../types/deck/deckActionTypes';
import { AllDecksType } from '../types/deck/deckTypes';
import { CardType } from '../types/card/cardTypes';

const init: State['deckReducer'] = { allDecks: [], editedDeck:{
  title: '',
  _id: '',
  private: true,
  userId: '',
  cards:[],
  notStarted: [],
  learned: [],
  readyToRepeat: [],
  notReadyToRepeat: []
} };

export const deckReducer = (
  deckReducer: State['deckReducer'] = init,
  action: DeckActions
): State['deckReducer'] => {
  switch (action.type) {
    case 'DOWNLOAD_DECKS':
      const allDecksPayload: AllDecksType = action.payload;
      return { ...deckReducer, allDecks: allDecksPayload };
    case 'THIS_DECK':
     return {...deckReducer,editedDeck:action.payload}
    case 'RENAME_TITLE_DECK':
      return {...deckReducer,editedDeck:{...deckReducer.editedDeck,title:action.payload}} 
  //  case "RENAME_QUESTION_CARD":
  //       return {...deckReducer,editedDeck:{...deckReducer.editedDeck, card:deckReducer.editedDeck.cards.map(el => {
  //         if(el.question == action.paiload._id){
              // return el.question=action.paiload.question}
              // else return el
  //       })}}
  // case 'DELETE_CARD':
  //   return {...deckReducer,editedDeck:{...deckReducer.editedDeck,
  //   cards:deckReducer.editedDeck.cards.filter( (el) => el._id !== action.payload)}}
  case 'ADD_CARD':
    return {...deckReducer,editedDeck:{...deckReducer.editedDeck,cards:[...deckReducer.editedDeck.cards,action.payload]}}
    default:
      return deckReducer;
  }
};
