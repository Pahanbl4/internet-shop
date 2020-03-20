import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'landing-footer',
    templateUrl: 'landing-footer.component.html',
    styleUrls: ['landing-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingFooterComponent {
    currentYear: number = moment().year();

    constructor() {}

    onContact(): void {
    }
}
