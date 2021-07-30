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
import {
  getPublicDecksAC,
  getPublicDecksFetch,
} from '../ActionCreators/deck/getPublicDecksSagaAC';
import { copyDeckAC, copyDeckFetch } from '../ActionCreators/deck/copyDeckAC';
import {fetchAddDeckSaga} from '../saga/fetch/fetchAddDeckSaga'
import {addDeckAC} from '../ActionCreators/deck/addDeckAC'
import {fetchDelDeckSaga} from '../saga/fetch/fetchDelDeckSaga'
import {delDeckAC} from '../../redux/ActionCreators/deck/delDeckAC'

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

//add Deck
function* addDeckWorker(action:{
  type: string;
  payload: string
}) {
  try {
    const {newDeck} =  yield call(fetchAddDeckSaga,action.payload);
     
    yield put(  addDeckAC (newDeck));
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}
//del deck
function* delDeckWorker(action:{
  type: string;
  payload: string
}) {
  try {
    const {_id} =  yield call(fetchDelDeckSaga,action.payload);
     console.log(_id)
    yield put(delDeckAC (_id));
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}

export function* deckWatcher() {
  yield takeEvery<DeckActionTypes>('DOWNLOAD_DECKS_SAGA', downloadDecksWorker);
  yield takeEvery<DeckActionTypes>( 'GET_PUBLIC_DECKS_SAGA',getPublicDecksWorker);
  yield takeEvery('SAVE_RENAME_DECK_SAGA', saveEditDeckWorker);
  yield takeEvery('GET_DECK_SAGA', getDeckWorker);
  yield takeEvery('STATUS_DECK_SAGA', statusDeckWorker);
  yield takeEvery('COPY_DECK_SAGA', copyDeckWorker);
  yield takeEvery('ADD_DECK_SAGA', addDeckWorker);
  yield takeEvery('DELETE_DECK_SAGA', delDeckWorker);
}
