import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/abstract/base-api.service';
import { ProductModel } from '@shared/models/product.model';

@Injectable()
export class ProductApiService extends BaseApiService {
    constructor(
        http: HttpClient,
        store: Store
    ) {
        super(http, store);
    }

    public get(id: number): Observable<any> {
        return this.httpGet(`Product/${id}`, x => new ProductModel(x));
    }
}
