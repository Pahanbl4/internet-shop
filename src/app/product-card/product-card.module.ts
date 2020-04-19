import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

import { InterestDiscountModule } from '../interest-discount/interest-discount.module';
import { ProductCardComponent } from './product-card.component';

@NgModule({
    declarations: [
        ProductCardComponent
    ],
    imports: [
        CommonModule,
        InterestDiscountModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ],
    providers: [],
    exports: [ProductCardComponent]
})
export class ProductCardModule { }
