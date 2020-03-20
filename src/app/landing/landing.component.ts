import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'view-landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['landing.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent { }
