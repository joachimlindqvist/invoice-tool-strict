import { setWorkerNet } from '../../../src/reducers/invoice-builder/invoice-builder-actions';

describe('Invoice Builder actions', function () {
    describe('setWorkerNet', function () {
        it('should dispatch an action', function (done) {
            const thunk = setWorkerNet({}, 1000);
            const dispatch = jasmine.createSpy('dispatch');
            thunk(dispatch, () => {}).then((result) => {
                expect(dispatch).toHaveBeenCalled();
                done();
            });
        });
    });
});