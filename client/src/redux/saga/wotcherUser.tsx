import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchLoginUserSaga } from './fetch/fetchLoginUserSaga';
import { fetchAddUserSaga } from './fetch/fetchAddUserSaga';
import { addUserAC } from '../ActionCreators/User/addUserAC';
import { ActionUserType } from '../types/actionUser';
import { logoutAC } from '../ActionCreators/User/logoutAC';
import { fetchLogout } from './fetch/fetchLogout';
import { fetchChangeTimeSaga } from './fetch/fetchChangeTimeSaga';
//add user
export function* workerAddUser(action: {
  type: string;
  payload: { login: string; email: string; password: string };
}) {
  try {
    const { _id, login, email, password } = yield call(
      fetchAddUserSaga,
      action.payload
    );

    yield put(addUserAC(_id, login, email, password));
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}
//login user
export function* workerLoginUser(action: {
  type: string;
  payload: { login: string; password: string };
}) {
  try {
    const { _id, login, email, password } = yield call(
      fetchLoginUserSaga,
      action.payload
    );
    if (login) {
      yield put(addUserAC(_id, login, email, password));
    } else {
      alert('Такой пользователь не зарегестрирован!');
    }
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}

export function* workerLogout() {
  try {
    yield call(fetchLogout);
    yield put(logoutAC());
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}

export function* workerChangeTime(action: {
  type: string;
  payload: { newDate: Date };
}) {
  try {
    yield call(fetchChangeTimeSaga, action.payload);
    // yield put(logoutAC());
  } catch (e) {
    yield put({ type: 'error', message: e.message });
  }
}

export function* wotcher() {
  yield takeEvery('ADD_USER_SAGA', workerAddUser);
  yield takeEvery('LOGIN_USER_SAGA', workerLoginUser);
  yield takeEvery('LOGOUT_SAGA', workerLogout);
  yield takeEvery('CHANGE_TIME_SAGA', workerChangeTime);
}
