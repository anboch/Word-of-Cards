import { call, put, takeEvery } from 'redux-saga/effects';
import { resultOfAnswerFetch } from '../ActionCreators/card/resultOfAnswerSagaAC';
import { CardType } from '../types/card/cardTypes';
import { CardActionTypes } from '../types/card/deckActionTypes';

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
  yield takeEvery('SEND_RESULT_ANSWER_SAGA', resultOfAnswerWorker);
}
