import { all } from 'redux-saga/effects';


import { wotcher } from './wotcherUser';
import { deckWatcher } from './deckWatcher';

export function* rootWatcher() {
  yield all([wotcher(), deckWatcher()]);
}
