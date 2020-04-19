import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Select } from '@ngxs/store';
import { BasketState } from './store/basket-popup.state';
import { Observable } from 'rxjs';
import { OrderModel } from '@shared/models/order.mdel';

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
        public ref: ChangeDetectorRef
    ) { }

    onSave(): void {
        this.dialogRef.close();
    }

    onClose(): void {
        this.dialogRef.close();
    }
}
