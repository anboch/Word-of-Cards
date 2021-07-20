import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import {ADD_USER_SAGA} from '../ActionTypes'
import {fetAddUserSaga} from '../fetch/fetAddUserSaga'
import {addUserAC} from '../ActionCreators'


export function* workerAddUser (action) {
 
  try {
    const user = yield call(fetAddUserSaga,action.payload)
    
    yield put(addUserAC(user));
 } catch (e) {
    yield put({type: "error", message: e.message});
 }
}

export function* wotcher() {
  yield takeEvery(ADD_USER_SAGA,workerAddUser)

 }
