import { call, put, takeEvery } from 'redux-saga/effects';
import {
  downloadDeckFetch,
  downloadDecksAC,
} from '../ActionCreators/deck/downloadDeckAC';
import { getDeckFetch, getDeckAC } from '../ActionCreators/deck/getDeckAC';
import { DeckActionTypes } from '../types/deck/deckActionTypes';

function* downloadDecksWorker() {
  try {
    const { decksWithClusteredCards } = yield call(downloadDeckFetch);
    const action = downloadDecksAC(decksWithClusteredCards);
    // put == dispatch
    yield put(action);
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

// yield takeEvery<DeckActionTypes>('DOWNLOAD_DECKS_SAGA', downloadDecksWorker);

export function* deckWatcher() {
  yield takeEvery('DOWNLOAD_DECKS_SAGA', downloadDecksWorker);
  yield takeEvery('GET_DECK_SAGA', getDeckWorker);
}
