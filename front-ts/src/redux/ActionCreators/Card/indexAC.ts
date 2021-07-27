export type ActionCardType = "ADD_CARD" | "DELETE_CARD" | 'ADD_CARD_SAGA'
|'DELETE_CARD_SAGA' | 'RENAME_CARD' |'RENAME_CARD_SAGA'

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
  payload: string
}

export interface deleteCardSagaAction extends ActionCard {
  type:"DELETE_CARD_SAGA";
  payload: string
}

export interface renameCardAction extends ActionCard {
  type:"RENAME_CARD";
  payload: {
    _id:string,
    question:string,
    answer:string
  }
}

export interface renameCardSagaAction extends ActionCard {
  type:"RENAME_CARD_SAGA";
  payload: {
    _id:string,
    question:string,
    answer:string
  }
}

export type ActionsCard = addCardAction | addCardSagaAction 
| deleteCardAction |deleteCardSagaAction | renameCardAction | renameCardSagaAction
