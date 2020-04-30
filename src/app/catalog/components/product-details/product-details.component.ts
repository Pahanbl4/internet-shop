import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CatalogState } from 'app/catalog/store/catalog.state';
import { ProductModel } from '@shared/models/product.model';
import { Observable } from 'rxjs';
import { AddToBasket } from 'app/basket-popup/store/basket-popup.actions';

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
    @Select(CatalogState.product) product$: Observable<ProductModel>;

    constructor(public store: Store) { }

    onAddItem(product: ProductModel): void {
        this.store.dispatch(new AddToBasket(product));
    }
}
