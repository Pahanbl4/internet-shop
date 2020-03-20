import {
    Action,
    State,
    StateContext,
    Store
} from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';

import { SetError, SetSuccess } from './toast.actions';
import { ToastStateModel } from './toast.model';

@State<ToastStateModel>({
    name: 'toastState',
    defaults: {
        payload: null
    }
})
export class ToastState {

    constructor(
        protected store: Store,
        private toastService: ToastrService
    ) { }

    @Action(SetSuccess)
    onSetSuccess({ }: StateContext<ToastStateModel>, { payload }: ToastStateModel): void {
        this.toastService.success(payload);
    }

    @Action(SetError)
    onSetError({ }: StateContext<ToastStateModel>, { payload }: ToastStateModel): void {
        this.toastService.error(payload);
    }
}
