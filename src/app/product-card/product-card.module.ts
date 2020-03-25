import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';

import { ProductCardComponent } from './product-card.component';
import { InterestDiscountModule } from '../interest-discount/interest-discount.module';

@NgModule({
    declarations: [
        ProductCardComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        InterestDiscountModule
    ],
    providers: [],
    exports: [ProductCardComponent]
})
export class ProductCardModule { }
