


const initialStateUser = {
  user:{}
}

export const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case "INIT_USER":
      return {  };
    case "ADD_USER":
      return {  };
 
    default:
      return state;
  }
};
