export type ActionCardType = "ADD_CARD" | "DELETE_CARD" | 'ADD_CARD_SAGA'

interface ActionCard {
  type:ActionCardType
}

export interface addCardAction extends ActionCard{
  type:"ADD_CARD";
  payload:any
}

export interface addCardSagaAction extends ActionCard{
  type:"ADD_CARD_SAGA";
  payload: {question:string,answer:string}
}

export interface deleteCardAction extends ActionCard {
  type:"DELETE_CARD";
  payload: {_id:string,question:string,answer:string, lastAnswerDate:Date,levelOfStudy:number}
}

export type ActionsCard = addCardAction | addCardSagaAction | deleteCardAction
