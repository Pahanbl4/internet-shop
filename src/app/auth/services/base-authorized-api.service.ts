import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';

import { BaseApiService } from '@shared/abstract/base-api.service';
import { environment } from '@environments/environment';

import { Unauthorized } from '../store/current-user/current-user.actions';

@Injectable()
export class BaseAuthorizedApiService extends BaseApiService {

    constructor(
        http: HttpClient,
        protected store: Store
    ) {
        super(http, store);
    }

    public handleError(error: any): void {
        if (!environment.production) {
            let message = error._body;
            message = error.status ? `${error.status} - ${error.statusText}` : message;
            message = message ? message : 'Server error';
            console.error(message);
        }
        if (error && error.status) {
            switch (error.status) {
                case 401:
                    this.store.dispatch(new Unauthorized());
                    break;
            }
        }
    }
}
