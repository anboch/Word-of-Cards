import { all } from 'redux-saga/effects';
import { combineWatchers } from 'redux-saga-combine-watchers';

import { wotcher } from './wotcherUser';
import { deckWatcher } from './deckWatcher';

export function* rootWatcher() {
  yield all(combineWatchers(wotcher, deckWatcher));
}
