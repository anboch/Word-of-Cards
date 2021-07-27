import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {fetchAddCardSaga} from '../saga/fetch/fetchAddCardSaga'
import {addCardAC} from '../ActionCreators/Card/addCard'

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






export function* cardWatcher() {
  yield takeEvery('ADD_CARD_SAGA', warkerAddCard);

}
