import { call, put, takeEvery } from 'redux-saga/effects';
import {
  downloadDeckFetch,
  downloadDecksAC,
} from '../ActionCreators/deck/downloadDeckAC';
import { getDeckFetch, getDeckAC } from '../ActionCreators/deck/getDeckAC';
import { DeckActionTypes } from '../types/deck/deckActionTypes';
import { saveEditDeckFetch } from '../../redux/saga/fetch/fetchSaveEditDeck';
import { saveEditDeckAC } from '../ActionCreators/deck/saveEditDeckAC';
import {
  getPublicDecksAC,
  getPublicDecksFetch,
} from '../ActionCreators/deck/getPublicDecksSagaAC';
import { copyDeckAC, copyDeckFetch } from '../ActionCreators/deck/copyDeckAC';

function* downloadDecksWorker() {
  try {
    const { decksWithClusteredCards } = yield call(downloadDeckFetch);
    const action = downloadDecksAC(decksWithClusteredCards);
    yield put(action);
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}
function* getPublicDecksWorker() {
  try {
    const { allPublicDecks } = yield call(getPublicDecksFetch);
    const action = getPublicDecksAC(allPublicDecks);
    yield put(action);
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}

function* saveEditDeckWorker(action: {
  type: string;
  payload: { deckId: string; newTitle: string };
}) {
  try {
    yield call(saveEditDeckFetch, action.payload);

    yield put(saveEditDeckAC(action.payload.newTitle));
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

function* copyDeckWorker(action: { type: DeckActionTypes; payload: string }) {
  try {
    const { copiedDeck } = yield call(copyDeckFetch, action.payload);
    yield put(copyDeckAC(copiedDeck));
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}

export function* deckWatcher() {
  yield takeEvery<DeckActionTypes>('DOWNLOAD_DECKS_SAGA', downloadDecksWorker);
  yield takeEvery<DeckActionTypes>(
    'GET_PUBLIC_DECKS_SAGA',
    getPublicDecksWorker
  );
  yield takeEvery('SAVE_RENAME_DECK_SAGA', saveEditDeckWorker);
  yield takeEvery('GET_DECK_SAGA', getDeckWorker);
  yield takeEvery('COPY_DECK_SAGA', copyDeckWorker);
}
