import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LandingHeroComponent } from './landing-hero.component';

describe('Home Application: LandingHeroComponent', () => {
    let fixture: ComponentFixture<LandingHeroComponent>;
    let component: LandingHeroComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LandingHeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(LandingHeroComponent);
        component = fixture.componentInstance;
    });

    it('should create an instance', done => {
        expect(component).toBeTruthy();
        done();
    });
});
