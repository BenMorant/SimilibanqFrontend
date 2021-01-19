import { Bankoperation } from "./bankoperation";

export interface Account {
  idAccount:number;
  balance:number;
  interestRate:number;
  overdraft:number;
  bankOperations:Bankoperation[];

}
