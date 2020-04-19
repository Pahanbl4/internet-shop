import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'precentageDeduction'
})
export class precentageDeductionPipe implements PipeTransform {
    transform(price: number, precentage: number): number {
        if (!precentage) {
            return price;
        }

        return this.minusPercent(price, precentage)
    }

    minusPercent(n: number, p: number): number {
        return n - (n * (p/100));
      }
}
