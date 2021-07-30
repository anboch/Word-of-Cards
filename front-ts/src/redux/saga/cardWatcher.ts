import { call, put, takeEvery} from 'redux-saga/effects';
import {fetchAddCardSaga} from '../saga/fetch/fetchAddCardSaga'
import {addCardAC} from '../ActionCreators/Card/addCard'
import {deleteCardAC} from '../ActionCreators/Card/delCard'
import {renameCardAC} from '../ActionCreators/Card/renCard'
import { resultOfAnswerFetch } from '../ActionCreators/card/resultOfAnswerSagaAC';
import { CardType } from '../types/card/cardTypes';
import { CardActionTypes } from '../types/card/deckActionTypes';
import {fetchDelCardSaga} from '../saga/fetch/fetchDelCardSaga'
import {fetchRenCardSaga} from '../saga/fetch/fetchRenCardSaga'

export function* warkerAddCard(action: {
  type: string;
  payload: {deckId:string, question: string; answer: string};
}) {
 
  try { 
  const {newCard} = yield call(fetchAddCardSaga, action.payload);
  
    yield put(addCardAC(newCard));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}

export function* warkerDelCard(action: {
 
  type: string;
  payload:{deckId:string,
    cardId:string}
}) {
 
  try { 
    yield call(fetchDelCardSaga, action.payload);
    yield put(deleteCardAC(action.payload.cardId));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}

export function* warkerRenCard(action: {
  type: string;
  payload:  {deckId:string,
    cardId:string,
  question: string,
answer:string};
}) {
 
  try { 
    yield call(fetchRenCardSaga, action.payload);
  const {cardId,question,answer} = action.payload
    yield put(renameCardAC(cardId,question,answer));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}

function* resultOfAnswerWorker(action: {
  type: CardActionTypes;
  payload: { deckInGameId: string; cardInGame: CardType; remembered: boolean };
}) {
  try {
    yield call(resultOfAnswerFetch, action.payload);
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}

export function* cardWatcher() {
  yield takeEvery('ADD_CARD_SAGA', warkerAddCard);
  yield takeEvery('DELETE_CARD_SAGA', warkerDelCard)
  yield takeEvery('RENAME_CARD_SAGA', warkerRenCard)
  yield takeEvery('SEND_RESULT_ANSWER_SAGA', resultOfAnswerWorker);
}
