import { call, put, takeEvery } from 'redux-saga/effects';
import {
  downloadDeckFetch,
  downloadDecksAC,
} from '../ActionCreators/deck/downloadDeckAC';
import { DeckActionTypes } from '../types/deck/deckActionTypes';

function* downloadDecksWorker() {
  try {
    const { allDecks } = yield call(downloadDeckFetch);
    const action = downloadDecksAC(allDecks);
    // put == dispatch
    yield put(action);
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}

export function* deckWatcher() {
  yield takeEvery<DeckActionTypes>('DOWNLOAD_DECKS_SAGA', downloadDecksWorker);
}
