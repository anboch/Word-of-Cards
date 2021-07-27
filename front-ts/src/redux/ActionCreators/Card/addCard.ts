import {addCardAction,addCardSagaAction} from "./indexAC";

export const addCardAC = (newCard:any): addCardAction => ({
  type: "ADD_CARD",
  payload:
    newCard
});

export const addCardSagaAC = (question:string,
  answer:string): addCardSagaAction => ({
  type: "ADD_CARD_SAGA",
  payload: {
    question,answer
  },
});
