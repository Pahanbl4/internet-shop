import { AuthorizedPersonModel } from '@shared/models/authorized-person.model';

export interface CurrentUserStateModel {
    current: AuthorizedPersonModel;
}
