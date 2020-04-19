import { CanDeactivate } from '@angular/router';
import { HostListener, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';

import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { IHaveChanges } from '../interfaces/i-have-changes.interface';

@Injectable()
export class UnsavedChangesGuard<T extends IHaveChanges> implements CanDeactivate<T> {
    constructor(
        protected dialog: MatDialog
    ) { }

    @HostListener('window:beforeunload')
    canDeactivate(component: T): Observable<boolean> {
        if (!component.haveChanges()) {
            return of(true);
        }

        return this.showConfirmDialog();
    }

    protected showConfirmDialog(): Observable<any> {
        return this.dialog.open(ConfirmDialogComponent, {
            data: {
                booleanResponse: true,
                content: 'You have unsaved changed. Are you sure you want to discard them?'
            }
        }).afterClosed();
    }
}
