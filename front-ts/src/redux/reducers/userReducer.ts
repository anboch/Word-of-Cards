
import {ActionsUser} from '../ActionCreators/User/indexAC'
import {State, User} from '../types/index'

const init:State={
 user:{_id:'gg',login:'tt',email:"", password:''}
}

export const userReducer = (state:State=init, action:ActionsUser) => {
  switch (action.type) {
  
    case "ADD_USER":
      const newUser: User = {
        _id:action.payload._id,
        login:action.payload.login,
        email:action.payload.email,
        password:action.payload.password
      }
      return { ...state,user:newUser };
      case "LOGIN_USER":
        return {  };
 
    default:
      return state;
  }
};
