import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LandingFeaturesComponent } from './landing-features.component';

describe('Features Application: LandingFeaturesComponent', () => {
    let fixture: ComponentFixture<LandingFeaturesComponent>;
    let component: LandingFeaturesComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LandingFeaturesComponent],
            providers: [],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(LandingFeaturesComponent);
        component = fixture.componentInstance;
    });

    it('should create an instance', done => {
        expect(component).toBeTruthy();
        done();
    });
});
