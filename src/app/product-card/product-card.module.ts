import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

import { PipesModule } from '@shared/pipes/pipes.module';

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
        MatIconModule,
        PipesModule
    ],
    providers: [],
    exports: [ProductCardComponent]
})
export class ProductCardModule { }
