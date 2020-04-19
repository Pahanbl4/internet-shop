import {
    Action,
    Selector,
    State,
    StateContext
} from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ListModel } from '@shared/models/list.model';

import { AuthStateModel } from './auth.model';
import { CurrentUserState } from './current-user/current-user.state';
import { LoadBasicRoles } from './auth.actions';
import { RolesApiService } from '../services/roles-api.service';

@State<AuthStateModel>({
    name: 'authState',
    defaults: {
        basicRoles: [],
    },
    children: [
        CurrentUserState
    ]
})
@Injectable()
export class AuthState {

    @Selector()
    static basicRoles(state: AuthStateModel): ListModel[] {
        return state.basicRoles;
    }

    constructor(
        private rolesApiService: RolesApiService
    ) { }

    @Action(LoadBasicRoles)
    onLoadBasicRoles({ patchState }: StateContext<AuthStateModel>): Observable<any> {
        return this.rolesApiService.get().pipe(
            tap((roles: ListModel[]) =>
                patchState({
                    basicRoles: roles
                })
            )
        );
    }

}
