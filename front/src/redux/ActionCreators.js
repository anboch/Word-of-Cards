import {ADD_USER_SAGA,ADD_USER} from './ActionTypes'


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
