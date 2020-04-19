import { Router } from '@angular/router';
import { Directive } from '@angular/core';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { SetError } from '@shared/toast';

import { CurrentUserResolver } from '../auth/current-user-resolver/current-user-resolver';
import { Roles } from '@shared/enums/roles.enum';

@Directive()
export abstract class AuthGuardBase {

    constructor(
        public currentUserResolver: CurrentUserResolver,
        public router: Router,
        public store: Store
    ) { }

    checkUserAndRolesExisting(): Promise<boolean> {
        return this.currentUserResolver
            .resolve()
            .toPromise()
            .then(user => {
                if (!user) {
                    this.store.dispatch(new SetError('Invalid Email or password'));
                    return false;
                } else if (user.role !== Roles.Admin) {
                    this.store.dispatch(new Navigate(['/']));
                    return false;
                }
                return true;
            }).catch(() => {
                this.store.dispatch(new SetError('Invalid Email or password'));
                return false;
            });
    }

}
