import { Record } from 'immutable';

export default function TypedRecord<T> (defaultValues: T) {
    return class TypedRecord extends Record(defaultValues) {
        constructor (params?: T) {
            super(params);
        }
        with (values: T) {
            return (super.merge(values as T) as this);
        }
    }
}