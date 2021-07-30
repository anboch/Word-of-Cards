import {renameCardAction,renameCardSagaAction} from "./indexAC";

export const renameCardAC = (_id:string,question:string,answer:string): renameCardAction => ({
  type: "RENAME_CARD",
  payload: {
   _id, question , answer}
});

export const renameCardSagaAC = (deckId:string,cardId:string,question:string,answer:string): renameCardSagaAction => ({
  type: "RENAME_CARD_SAGA",
  payload: {
    deckId,cardId, question , answer}
});
