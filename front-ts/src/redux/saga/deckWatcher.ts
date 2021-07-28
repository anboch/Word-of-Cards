import { call, put, takeEvery } from 'redux-saga/effects';
import {
  downloadDeckFetch,
  downloadDecksAC,
} from '../ActionCreators/deck/downloadDeckAC';
import { getDeckFetch, getDeckAC } from '../ActionCreators/deck/getDeckAC';
import { DeckActionTypes } from '../types/deck/deckActionTypes';
import {saveEditDeckFetch} from '../../redux/saga/fetch/fetchSaveEditDeck'
import {saveEditDeckAC} from '../ActionCreators/deck/saveEditDeckAC'

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
  payload: object;
}) {
  try {
    const renameDeck:object = yield call(saveEditDeckFetch,action.payload);
    yield put(  saveEditDeckAC (renameDeck));
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
  
export function* deckWatcher() {
  yield takeEvery<DeckActionTypes>('DOWNLOAD_DECKS_SAGA', downloadDecksWorker);
  // yield takeEvery<DeckActionTypes>('SAVE_RENAME_DECK_SAGA', saveEditDeckWorker);
  yield takeEvery('GET_DECK_SAGA', getDeckWorker);
}
