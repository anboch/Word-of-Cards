import {addUserAction,addUserSagaAction} from "./indexAC";

export const addUserAC = (_id: string,login:string,
  email:string,password:string): addUserAction => ({
  type: "ADD_USER",
  payload: {
   _id,login,email,password
  },
});

export const addUserSagaAC = (login:string,
  email:string,password:string): addUserSagaAction => ({
  type: "ADD_USER_SAGA",
  payload: {
   login,email,password
  },
});
