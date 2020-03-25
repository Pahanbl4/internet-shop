import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InterestDiscountComponent } from './interest-discount.component';

@NgModule({
    declarations: [InterestDiscountComponent],
    imports: [CommonModule],
    exports: [InterestDiscountComponent]
})
export class InterestDiscountModule { }
