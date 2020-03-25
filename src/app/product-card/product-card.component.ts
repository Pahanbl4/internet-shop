import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'product-card',
    templateUrl: 'product-card.component.html',
    styleUrls: ['product-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

    instock = true;

    onAddItem(): void {
        console.log('added item to Basket')
    }
}
