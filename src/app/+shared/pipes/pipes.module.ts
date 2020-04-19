import { NgModule } from '@angular/core';

import { precentageDeductionPipe } from './percentage-deduction.pipe';

const pipes = [
    precentageDeductionPipe
]

@NgModule({
    declarations: pipes,
    exports: pipes,
    providers: pipes
})
export class PipesModule { }
