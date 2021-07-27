import { all } from 'redux-saga/effects';


import { wotcher } from './wotcherUser';
import { deckWatcher } from './deckWatcher';
import {cardWatcher} from './cardWatcher'

export function* rootWatcher() {
  yield all([wotcher(), deckWatcher(), cardWatcher()]);
}
