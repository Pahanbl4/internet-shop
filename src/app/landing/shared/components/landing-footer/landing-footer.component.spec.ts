import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LandingFooterComponent } from './landing-footer.component';

describe('Home Application: LandingFooterComponent', () => {
    let fixture: ComponentFixture<LandingFooterComponent>;
    let component: LandingFooterComponent;
    let matDialogMock = {
        open: jasmine.createSpy('open')
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LandingFooterComponent],
            providers: [
                { provide: MatDialog, useValue: matDialogMock }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(LandingFooterComponent);
        component = fixture.componentInstance;
    });

    it('should create an instance', done => {
        expect(component).toBeTruthy();
        done();
    });

    it('should call dialog open', () => {
        component.onContact();

        expect(matDialogMock.open).toHaveBeenCalled();
    });
});
