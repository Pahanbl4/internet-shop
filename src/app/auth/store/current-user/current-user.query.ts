import { Selector } from '@ngxs/store';

import { AuthorizedPersonModel } from '@shared/models/authorized-person.model';

import { CurrentUserState } from './current-user.state';

export class CurrentUserQuery {
    @Selector([CurrentUserState.user])
    static user(user: AuthorizedPersonModel): AuthorizedPersonModel {
        return user;
    }
}
