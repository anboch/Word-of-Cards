import {loginUserAction,loginUserSagaAction} from "./indexAC";

// export const loginUserAC = (_id: string,login:string,
//   email:string,password:string): loginUserAction => ({
//   type: "LOGIN_USER",
//   payload: {
//    _id,login,email,password
//   },
// });

export const loginUserSagaAC = (login:string,
  password:string): loginUserSagaAction => ({
  type: "LOGIN_USER_SAGA",
  payload: {
   login,password
  },
});
