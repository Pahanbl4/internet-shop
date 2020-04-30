import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { LoadProduct } from '../store/catalog.actions';

@Injectable()
export class CatalogResolver implements Resolve<any> {

    constructor(public store: Store) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const id = +route.params['id'];
        return this.store.dispatch(new LoadProduct(id));
    }

}
