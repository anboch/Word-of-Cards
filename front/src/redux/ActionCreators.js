import {ADD_USER_SAGA,ADD_USER,LOGIN_USER_SAGA} from './ActionTypes'


export const addUserSagaAC = (payload) => {
  return {
    type:ADD_USER_SAGA,
    payload
  }
}


export const addUserAC = (payload) => {
  return {
    type:ADD_USER,
    payload
  }
}


export const loginUserSagaAC = (payload) => {
  return {
    type:LOGIN_USER_SAGA,
    payload
  }
}
