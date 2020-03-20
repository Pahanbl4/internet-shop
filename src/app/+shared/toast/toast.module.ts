import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ToastrModule } from 'ngx-toastr';

import { ToastState } from './store/toast.state';

@NgModule({
    imports: [
        NgxsModule.forFeature([
            ToastState
        ]),
        ToastrModule.forRoot({
            autoDismiss: true,
            onActivateTick: true,
            maxOpened: 10,
            enableHtml: true,
            timeOut: 5000,
            positionClass: 'toast-bottom-right'
        })
    ]
})
export class ToastModule {
    constructor(@Optional() @SkipSelf() parentModule: ToastModule) {
        if (parentModule) {
            throw new Error('ToastModule is already loaded. Import it in the AppModule only');
        }
    }
}
