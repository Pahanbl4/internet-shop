import {
    CanActivate,
    Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthGuardBase } from './auth.guard.base';
import { CurrentUserResolver } from '../auth/current-user-resolver/current-user-resolver';

@Injectable()
export class AuthGuard extends AuthGuardBase implements CanActivate {

    constructor(
        public currentUserResolver: CurrentUserResolver,
        public router: Router,
        public store: Store
    ) {
        super(
            currentUserResolver,
            router,
            store
        );
    }

    /**
     * check if user can activate route
     * if unauthorized redirects to home/login
     * @param route
     * @param state
     */
    canActivate(): Promise<boolean> {
        return this.checkUserAndRolesExisting();
    }
}
