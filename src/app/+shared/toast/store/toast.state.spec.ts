import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

import { SetError, SetSuccess } from './toast.actions';
import { TestHelper } from '../../helpers/test.helper.spec';
import { ToastState } from './toast.state';

describe('Shared: ToastState', () => {
    let store: Store;
    let toastService = {
        success: jasmine.createSpy('success'),
        error: jasmine.createSpy('error')
    };

    TestHelper.setupTestBed({
        imports: [
            NgxsModule.forRoot([ToastState])
        ],
        providers: [
            { provide: ToastrService, useValue: toastService }
        ]
    });

    beforeEach(() => {
        store = TestBed.get(Store);
        resetStore();
        resetMockProviders();
    });

    it('should create store', () => {
        expect(store).toBeTruthy();
    });

    describe('Actions tests:', () => {
        it('SetSuccess: should call ToastrService success method', () => {
            store.dispatch(new SetSuccess('success'));

            expect(toastService.success).toHaveBeenCalledTimes(1);
            expect(toastService.success).toHaveBeenCalledWith('success');
        });

        it('SetError: should call ToastrService error method', () => {
            store.dispatch(new SetError('error'));

            expect(toastService.error).toHaveBeenCalledTimes(1);
            expect(toastService.error).toHaveBeenCalledWith('error');
        });
    });

    function resetMockProviders(): void {
        toastService.success.calls.reset();
        toastService.success.and.returnValue(of(null));
        toastService.error.calls.reset();
        toastService.error.and.returnValue(of(null));
    }

    function resetStore(): void {
        store.reset({
            toastState: {
                payload: null
            }
        });
    }
});
