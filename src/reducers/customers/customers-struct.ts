import TypedRecord from '../../../lib/typed-immutable/typed-record';
import { List } from 'immutable';
import { ICustomer } from '../../entities/customer-entity';

export interface ICustomersStruct {
    list?: List<ICustomer>,
    isFetchingCustomers?: boolean
}

export default class CustomersStruct extends TypedRecord<ICustomersStruct>({
    list: null,
    isFetchingCustomers: null
}) implements ICustomersStruct {
    list: List<ICustomer>;
    isFetchingCustomers: boolean;
}