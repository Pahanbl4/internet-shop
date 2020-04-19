import { of } from 'rxjs';

import { CurrentUserResolver } from '@common/resolver/current-user-resolver/current-user-resolver';
import { LoadCurrentUser } from '@common/auth/store/current-user/current-user.actions';
import { CurrentUserModel } from '@common/models/extended/current-user.model';

describe('CurrentUserResolver', () => {
    let resolver: CurrentUserResolver;
    let storeMock;
    let dispatchResult: { authState: { currentUserState: { current: CurrentUserModel } } };

    beforeEach(() => {
        dispatchResult = { authState: { currentUserState: { current: new CurrentUserModel() } } };
        storeMock = {
            dispatch: jasmine.createSpy('dispatch').and.returnValue(of(dispatchResult))
        };

        resolver = new CurrentUserResolver(storeMock);
    });

    it('gets currentUser from server when not on state', () => {
        const id = 87;
        dispatchResult.authState.currentUserState.current.id = id;

        const result = resolver.resolve();

        expect(storeMock.dispatch).toHaveBeenCalledWith(new LoadCurrentUser());
        result.subscribe(data => expect(data.id).toBe(id));
    });
});
