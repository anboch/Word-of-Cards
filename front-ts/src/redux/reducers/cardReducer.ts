
const initialStateCard = {poiskCard:''}

export const cardReducer = (state = initialStateCard, action:{type:string,payload:string}) => {
  switch (action.type) {
    case "INIT_CARD":
      return {  };
    case "ADD_CARD":
      return {  };
    case "POISK_CARD":
    return {...cardReducer,poiskCard:action.payload }
    default:
      return state;
  }
};
