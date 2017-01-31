import TypedRecord from '../../lib/typed-immutable/typed-record';

export interface ICustomer {
    id: number,
    name: string,
    country?: string
}

export default class Customer extends TypedRecord<ICustomer>({ 
    id: null, 
    name: null, 
    country: 'SWEDEN'
}) implements ICustomer {
    id: number;
    name: string;
    country: string;
}