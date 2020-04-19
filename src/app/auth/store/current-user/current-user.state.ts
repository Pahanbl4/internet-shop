import {
    Action,
    Selector,
    State,
    StateContext
} from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';


import { CurrentUserStateModel } from './current-user.model';
import {
    ForgotPassword,
    LoadCurrentUser,
    Login,
    LoginForResetPassword,
    Logout,
    Unauthorized
} from './current-user.actions';
import { Roles } from '@shared/enums/roles.enum';
import { AuthorizedPersonModel } from '@shared/models/authorized-person.model';
import { CurrentUserApiService } from '../../services/current-user-api.service';
import { ForgotPasswordModel } from '@shared/models/forgot-password.model';
import { SetError } from '@shared/toast';

@State<CurrentUserStateModel>({
    name: 'currentUserState',
    defaults: {
        current: null
    }
})
@Injectable()
export class CurrentUserState {

    @Selector()
    static user(state: CurrentUserStateModel): AuthorizedPersonModel {
        return state.current;
    }

    @Selector()
    static userEmail(state: CurrentUserStateModel): string {
        return state.current ? state.current.email : null;
    }

    @Selector()
    static userId(state: CurrentUserStateModel): number {
        return state.current ? state.current.id : null;
    }

    @Selector()
    static userRole(state: CurrentUserStateModel): Roles {
        return state.current.role;
    }

    @Selector()
    static userFirstName(state: CurrentUserStateModel): string {
        return state.current ? state.current.firstName : null;
    }

    @Selector()
    static userFullName(state: CurrentUserStateModel): string {
        return state.current ? state.current.userName : null;
    }

    @Selector()
    static isUseradmin(state: CurrentUserStateModel): boolean {
        return !!state.current && state.current.role === Roles.Admin;
    }

    constructor(
        private apiService: CurrentUserApiService
    ) { }

    @Action(LoadCurrentUser)
    onLoadCurrentUser({ getState, patchState }: StateContext<CurrentUserStateModel>): Observable<any> {
        const { current: user } = getState();
        if (user) {
            return of(user);
        }
        return this.apiService.get().pipe(
            tap(current => {
                patchState({ current });
            })
        );
    }

    @Action(Unauthorized)
    onUnauthorized({ dispatch, patchState }: StateContext<CurrentUserStateModel>): void {
        patchState({ current: null });
        dispatch(new Navigate(['login']));
    }

    @Action(Login)
    onLogin(
        { patchState, dispatch }: StateContext<CurrentUserStateModel>,
        { payload }: Login
    ): Observable<any> {
        return this.apiService.login(payload).pipe(
            tap(
                current => patchState({ current }),
                err => { dispatch(new SetError(err.error)); }
            )
        );
    }

    @Action(Logout)
    onLogout({ dispatch, patchState }: StateContext<CurrentUserStateModel>): Observable<any> {
        return this.apiService.logout().pipe(
            tap(() => {
                return dispatch(new Navigate([''])).subscribe(() => {
                    patchState({ current: null });
                });
            })
        );
    }

    @Action(LoginForResetPassword)
    onLoginForResetPassword({ patchState }: StateContext<CurrentUserStateModel>, { payload }: LoginForResetPassword): Observable<any> {
        return this.apiService.loginForResetPassword(payload).pipe(
            tap(current => {
                patchState({ current });
            })
        );
    }

    @Action(ForgotPassword)
    onForgotPassword({ }: StateContext<CurrentUserStateModel>, { payload }: ForgotPassword): Observable<ForgotPasswordModel> {
        return this.apiService.forgotPassword(payload);
    }

}
