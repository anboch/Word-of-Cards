
const initialStateCard = {}

export const cardReducer = (state = initialStateCard, action:{type:string}) => {
  switch (action.type) {
    case "INIT_CARD":
      return {  };
    case "ADD_CARD":
      return {  };
 
    default:
      return state;
  }
};
