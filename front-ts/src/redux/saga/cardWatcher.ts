import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {fetchAddCardSaga} from '../saga/fetch/fetchAddCardSaga'
import {addCardAC} from '../ActionCreators/Card/addCard'
import {deleteCardAC} from '../ActionCreators/Card/delCard'
import {renameCardAC} from '../ActionCreators/Card/renCard'

export function* warkerAddCard(action: {
  type: string;
  payload: { question: string; answer: string};
}) {
 
  try { 
  const {newCard} = yield call(fetchAddCardSaga, action.payload);
     console.log(newCard)
    yield put(addCardAC(newCard));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}

export function* warkerDelCard(action: {
  type: string;
  payload:  string;
}) {
 
  try { 

    yield put(deleteCardAC(action.payload));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}

export function* warkerRenCard(action: {
  type: string;
  payload:  {_id:string,
  question: string,
answer:string};
}) {
 
  try { 
  const {_id,question,answer} = action.payload
    yield put(renameCardAC(_id,question,answer));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}


export function* cardWatcher() {
  yield takeEvery('ADD_CARD_SAGA', warkerAddCard);
  yield takeEvery('DELETE_CARD_SAGA', warkerDelCard)
  yield takeEvery('RENAME_CARD_SAGA', warkerRenCard)
}
