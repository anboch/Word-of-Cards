import { call, put, takeEvery } from 'redux-saga/effects';
import {
  downloadDeckFetch,
  downloadDecksAC,
} from '../ActionCreators/deck/downloadDeckAC';
import { getDeckFetch, getDeckAC } from '../ActionCreators/deck/getDeckAC';
import { DeckActionTypes } from '../types/deck/deckActionTypes';
import {saveEditDeckFetch} from '../../redux/saga/fetch/fetchSaveEditDeck'
import {saveEditDeckAC} from '../ActionCreators/deck/saveEditDeckAC'
import {fetchStatusDeckSaga} from '../saga/fetch/fetchStatusDeckSaga'
import {deckStatusAC} from '../ActionCreators/deck/deckStatusSagaAC'

function* downloadDecksWorker() {
  try {
    const { decksWithClusteredCards } = yield call(downloadDeckFetch);
    const action = downloadDecksAC(decksWithClusteredCards);
    yield put(action);
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}


function* saveEditDeckWorker(action:{
  type: string;
  payload: {deckId:string,newTitle:string};
}) {
  try {
  yield call(saveEditDeckFetch,action.payload);
    
    yield put(  saveEditDeckAC (action.payload.newTitle));
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}

function* getDeckWorker(action: { type: DeckActionTypes; payload: string }) {
  try {
    const { deck } = yield call(getDeckFetch, action.payload);
    yield put(getDeckAC(deck));
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}
  
function* statusDeckWorker(action:{
  type: string;
  payload: string
}) {
  try {
     yield call(fetchStatusDeckSaga,action.payload);
    yield put(  deckStatusAC (action.payload));
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}

export function* deckWatcher() {
  yield takeEvery<DeckActionTypes>('DOWNLOAD_DECKS_SAGA', downloadDecksWorker);
  yield takeEvery('SAVE_RENAME_DECK_SAGA', saveEditDeckWorker);
  yield takeEvery('GET_DECK_SAGA', getDeckWorker);
  yield takeEvery('STATUS_DECK_SAGA', statusDeckWorker);
  
}
