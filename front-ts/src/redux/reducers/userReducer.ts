import { ActionsUser } from '../ActionCreators/User/indexAC';
import { State, User } from '../types/index';

const init: State['userReducer'] = {
  user: { _id: '', login: '', email: '', password: '' },
};

export const userReducer = (
  userReducer: State['userReducer'] = init,
  action: ActionsUser
) => {
  switch (action.type) {
    case 'ADD_USER':
      const newUser: User = {
        _id: action.payload._id,
        login: action.payload.login,
        email: action.payload.email,
        password: action.payload.password,
      };
      return { ...userReducer, user: newUser };
    case 'LOGOUT':
      return { ...userReducer, user: init };

    default:
      return userReducer;
  }
};
