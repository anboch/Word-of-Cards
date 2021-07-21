import { ActionUserType } from "../../types/actionUser";

interface ActionUser {
  type:ActionUserType
}

export interface addUserAction extends ActionUser{
  type:"ADD_USER";
  payload: {description:string}
}
