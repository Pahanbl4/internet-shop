import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';

import { AuthState } from './store/auth.state';
import { CurrentUserState } from './store/current-user/current-user.state';
import { CurrentUserApiService } from './services/current-user-api.service';
import { RolesApiService } from './services/roles-api.service';

@NgModule({
    imports: [
        NgxsModule.forFeature([
            AuthState,
            CurrentUserState,
        ]),
        HttpClientModule
    ],
    providers: [
        CurrentUserApiService,
        RolesApiService,
    ],
})
export class AuthModule {
    constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
        if (parentModule) {
            throw new Error('AuthModule is already loaded. Import it in the AppModule only');
        }
    }
}
