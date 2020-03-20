import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { TestHelper } from '../helpers/test.helper.spec';

describe('ConfirmDialogComponent', () => {
    let component: ConfirmDialogComponent;
    let fixture: ComponentFixture<ConfirmDialogComponent>;
    let matDialogMock: any;

    beforeEach(() => {
        matDialogMock = {
            close: jasmine.createSpy('close')
        };

        TestBed.configureTestingModule({
            declarations: [
                ConfirmDialogComponent
            ],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: matDialogMock }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(ConfirmDialogComponent);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create component instance', () => {
        fixture.detectChanges();

        expect(component).toBeTruthy();
    });

    describe('onCloseDialog:', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it('action should be called', () => {
            TestHelper.click(fixture.nativeElement.querySelector('.confirm-dialog-cancel-btn') as HTMLElement);

            expect(matDialogMock.close).toHaveBeenCalledWith(false);
        });

        it('action should not be called', () => {
            TestHelper.click(fixture.nativeElement.querySelector('.confirm-dialog-confirm-btn') as HTMLElement);

            expect(matDialogMock.close).toHaveBeenCalledWith(true);
        });
    });
});
