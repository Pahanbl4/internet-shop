import { MatDialog } from '@angular/material';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { IHaveChanges } from '../interfaces/i-have-changes.interface';
import { UnsavedChangesGuard } from './unsaved-changes.guard';

describe('UnsavedChangesGuard', () => {
    let guard: UnsavedChangesGuard<IHaveChanges>;

    let matDialogMock;
    let dialogRef: { afterClosed: any; };

    beforeEach(() => {
        initSpies();
        TestBed.configureTestingModule({
            providers: [
                UnsavedChangesGuard,
                { provide: MatDialog, useValue: matDialogMock }
            ]
        });
        guard = TestBed.get(UnsavedChangesGuard);
    });

    it('should create instance', () => {
        expect(guard).toBeTruthy();
    });

    it('no changes', () => {
        guard.canDeactivate({ haveChanges: () => false }).subscribe(result => {
            expect(result).toBe(true);
            expect(matDialogMock.open).not.toHaveBeenCalled();
        });
    });

    it('cancel changes', () => {
        guard.canDeactivate({ haveChanges: () => true }).subscribe(result => {
            expect(result).toBe(true);
            expect(matDialogMock.open).toHaveBeenCalledTimes(1);
        });
    });

    it('leave changes', () => {
        dialogRef.afterClosed.and.returnValue(of(false));
        guard.canDeactivate({ haveChanges: () => true }).subscribe(result => {
            expect(result).toBe(false);
            expect(matDialogMock.open).toHaveBeenCalledTimes(1);
        });
    });

    function initSpies(): void {
        dialogRef = {
            afterClosed: jasmine.createSpy('afterClosed').and.returnValue(of(true))
        };
        matDialogMock = {
            open: jasmine.createSpy('open').and.returnValue(dialogRef)
        };
    }
});
