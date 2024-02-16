import {Moment} from 'moment';
import {TransactionType} from '../enums/TransactionType';
import {StatusPayment} from '../enums/StatusPayment';

export class Spending {
  id: number;
  amount: number;
  description: string;
  date: Moment;
  transactionType: TransactionType;
  statusPayment: StatusPayment;
}
