import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {fetchLoginUserSaga} from './fetch/fetchLoginUserSaga'
import {fetchAddUserSaga} from './fetch/fetchAddUserSaga'
import {addUserAC} from '../ActionCreators/User/addUserAC'
import {ActionUserType} from '../types/actionUser'
//add user
export function* workerAddUser (action:{type:string,payload:{login:string,email:string,password:string}}) {
 
  try {
    const {_id,login,email,password} = yield call(fetchAddUserSaga,action.payload)
    
    yield put(addUserAC(_id,login,email,password));
 } catch (e) {
    yield put({type: "error", message: e.message});
 }
}
//login user
export function* workerLoginUser (action:{type:string,payload:{login:string,password:string}}) {
 
  try {
    const {_id,login,email,password} = yield call(fetchLoginUserSaga,action.payload)
    if(login){
 yield put(addUserAC(_id,login,email,password));
   
    }else{
      alert('Такой пользователь не зарегестрирован!')
    }
 } catch (e) {
    yield put({type: "error", message: e.message});
 }
}


export function* wotcher() {
  yield takeEvery("ADD_USER_SAGA",workerAddUser)
  yield takeEvery("LOGIN_USER_SAGA",workerLoginUser)

 }
