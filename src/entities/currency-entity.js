import { Map } from 'immutable';

class CurrencyEntity extends Map {
    constructor (values = { id }) {
        super(values);
    }
}

export default CurrencyEntity;