import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OrderModel } from '@shared/models/order.model';
import { Store } from '@ngxs/store';

import { AddToBasket } from '../basket-popup/store/basket-popup.actions';
import { Navigate } from '@ngxs/router-plugin';

@Component({
    selector: 'product-card',
    templateUrl: 'product-card.component.html',
    styleUrls: ['product-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
    @Input() order: OrderModel;

    constructor(public store: Store) { }

    onAddItem(): void {
        this.store.dispatch(new AddToBasket(this.order));
    }

    onOpen(): void {
        this.store.dispatch(new Navigate(['catalog', 'product', `${this.order.id}`]));
    }
}
