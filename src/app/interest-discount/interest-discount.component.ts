import {
    ChangeDetectionStrategy,
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'interest-discount',
    templateUrl: 'interest-discount.component.html',
    styleUrls: ['interest-discount.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterestDiscountComponent {

    @Input()
    set count(count: number) {
        this.displayedCount = count
            ? count > this.countLimit
                ? `${this.countLimit}+`
                : count.toString()
            : null;
    }

    displayedCount: string;

    readonly countLimit = 100;
}
