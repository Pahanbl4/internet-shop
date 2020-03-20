import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TestHelper } from '@common/helpers/test.helper';

import { LandingComponent } from './landing.component';

describe('Home Application: LandingComponent', () => {
    let fixture: ComponentFixture<LandingComponent>;
    let component: LandingComponent;

    TestHelper.setupTestBed({
        declarations: [LandingComponent],
        schemas: [NO_ERRORS_SCHEMA]
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LandingComponent);
        component = fixture.componentInstance;
    });

    it('should create an instance', done => {
        expect(component).toBeTruthy();
        done();
    });
});
