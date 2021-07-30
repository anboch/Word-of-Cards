
import {deleteCardAction,DeleteCardSagaAction} from "./indexAC";

export const deleteCardAC = (_id:string): deleteCardAction => ({
  type: "DELETE_CARD",
  payload:
   _id
});

export const deleteCardSagaAC = (deckId:string,cardId:string): DeleteCardSagaAction => ({
  type: "DELETE_CARD_SAGA",
  payload: {deckId,
    cardId
  }
});
