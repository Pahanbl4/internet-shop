import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { BaseAuthorizedApiService } from './base-authorized-api.service';
import { HttpClient } from '@angular/common/http';
import { ListModel } from '@shared/models/list.model';

@Injectable()
export class RolesApiService extends BaseAuthorizedApiService {

    constructor(
        http: HttpClient,
        protected store: Store
    ) {
        super(http, store);
    }

    public get(): Observable<ListModel[]> {
        return this.httpGet('BasicRoleList', x => new ListModel(x));
    }
}
