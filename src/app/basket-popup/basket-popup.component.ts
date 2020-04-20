import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { BasketState } from './store/basket-popup.state';
import { Observable } from 'rxjs';
import { OrderModel } from '@shared/models/order.mdel';
import { RemoveFromBasket, UpdateCount } from './store/basket-popup.actions';
import { SetSuccess } from '@shared/toast';

@Component({
    selector: 'basket-popup',
    templateUrl: 'basket-popup.component.html',
    styleUrls: ['basket-popup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketPopupComponent {
    @Select(BasketState.orders) orders$: Observable<OrderModel[]>;

    constructor(
        private dialogRef: MatDialogRef<BasketPopupComponent>,
        public ref: ChangeDetectorRef,
        public store: Store
    ) { }

    onSave(): void {
        this.store.dispatch(new SetSuccess('Заказ оформлен'))
        this.dialogRef.close();
    }

    onClose(): void {
        this.dialogRef.close();
    }

    onRemove(id: number): void {
        this.store.dispatch(new RemoveFromBasket(id));
    }

    onUpdateCount(model: OrderModel, number: number): void {
        this.store.dispatch(new UpdateCount(model, number));
    }
}
