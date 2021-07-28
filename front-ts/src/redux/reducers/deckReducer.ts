import { State } from '../types/index';
import { DeckActions } from '../types/deck/deckActionTypes';
import { AllDecksType , DeckType} from '../types/deck/deckTypes';
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
    case 'RENAME_CARD':
        return {...deckReducer, editedDeck:{...deckReducer.editedDeck,cards:
        deckReducer.editedDeck.cards.map(card => {
          if(card._id == action.payload._id){
            card.answer = action.payload.answer
            card.question = action.payload.question
            return card
          } else {
            return card
          }
        })}
   
      }
  case 'DELETE_CARD':
    return {...deckReducer,editedDeck:{...deckReducer.editedDeck,
    cards:deckReducer.editedDeck.cards.filter( (el) => {
     return  el._id !== action.payload})}}
  case 'ADD_CARD':
    return {...deckReducer,editedDeck:{...deckReducer.editedDeck,cards:[...deckReducer.editedDeck.cards,action.payload]}}
    case 'GET_DECK':
  const deckPayload: DeckType = action.payload;
  return { ...deckReducer, deckInGame: deckPayload };
case 'SET_DECK_FOR_GAME':
  return { ...deckReducer, deckInGame: action.payload };
    default:
      return deckReducer;
  }
};
