import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export abstract class ObserverComponent implements OnDestroy {

    subscriptions: Subscription[] = [];

    ngOnDestroy(): void {
        this.clearSubscriptions();
    }

    protected clearSubscriptions(): void {
        this.subscriptions.forEach(s => s && s.unsubscribe());
    }
}
