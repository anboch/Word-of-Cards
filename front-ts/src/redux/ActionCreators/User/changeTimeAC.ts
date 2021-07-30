import { changeTimeSagaAction } from './indexAC';

// export const loginUserAC = (_id: string,login:string,
//   email:string,password:string): loginUserAction => ({
//   type: "LOGIN_USER",
//   payload: {
//    _id,login,email,password
//   },
// });

export const changeTimeSagaAC = (newDate: Date): changeTimeSagaAction => ({
  type: 'CHANGE_TIME_SAGA',
  payload: {
    newDate,
  },
});
