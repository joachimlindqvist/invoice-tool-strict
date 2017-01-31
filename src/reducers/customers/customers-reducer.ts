///<reference path='../../../node_modules/immutable/dist/immutable.d.ts'/>
import { List, Map, Record } from 'immutable';
import Customer, { ICustomer } from '../../entities/customer-entity';
import CustomersStruct, { ICustomersStruct } from './customers-struct';
import { DefaultAction } from '../index';
import { 
    CREATING_CUSTOMER,
    SET_CUSTOMERS,
    ADD_CUSTOMER,
    FETCHING_CUSTOMERS,
    STOPPED_FETCHING_CUSTOMERS,
    CreatingCustomerAction,
    SetCustomersAction,
    AddCustomerAction,
    FetchingCustomersAction,
    StoppedFetchingCustomersAction
} from './customers-action-types';

export const INITIAL_STATE = new CustomersStruct({
    list: List<Customer>(),
    isFetchingCustomers: false
});

type CustomersAction = 
    CreatingCustomerAction | 
    SetCustomersAction | 
    AddCustomerAction | 
    FetchingCustomersAction | 
    StoppedFetchingCustomersAction | 
    DefaultAction;

export default (state: CustomersStruct = INITIAL_STATE, action: CustomersAction = DefaultAction) : CustomersStruct => {
    switch (action.type) {
        case SET_CUSTOMERS:
            return state.with({ list: action.payload });
        case FETCHING_CUSTOMERS:
            return state.with({ isFetchingCustomers: true });
        case STOPPED_FETCHING_CUSTOMERS:
            return state.with({ isFetchingCustomers: false });
        case ADD_CUSTOMER:
            return state.with({ list: state.list.push(action.payload)});
        default:
            return state;
    }
}