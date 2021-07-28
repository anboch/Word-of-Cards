
import {deleteCardAction,deleteCardSagaAction} from "./indexAC";

export const deleteCardAC = (_id:string): deleteCardAction => ({
  type: "DELETE_CARD",
  payload:
   _id
});

export const deleteCardSagaAC = (_id:string): deleteCardSagaAction => ({
  type: "DELETE_CARD_SAGA",
  payload: 
   _id
});
