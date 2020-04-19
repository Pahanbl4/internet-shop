import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';

import { AuthorizedPersonModel } from '@shared/models/authorized-person.model';
import { LoadCurrentUser } from '../store/current-user/current-user.actions';

@Injectable()
export class CurrentUserResolver implements Resolve<AuthorizedPersonModel> {
    constructor(private store: Store) { }

    resolve(): Observable<AuthorizedPersonModel> {
        return this.store.dispatch(new LoadCurrentUser()).pipe(
            map(x => x.authState.currentUserState.current)
        );
    }
}
