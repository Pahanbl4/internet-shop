import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'view-landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['landing.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {
    email: FormControl;

    onSend(): void {
        console.log('send email');
    }
}
