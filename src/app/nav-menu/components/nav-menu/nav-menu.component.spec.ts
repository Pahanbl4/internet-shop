import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NavMenuComponent } from './nav-menu.component';

describe('NavMenuComponent', () => {
    let component: NavMenuComponent;
    let fixture: ComponentFixture<NavMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavMenuComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(NavMenuComponent);
        component = fixture.componentInstance;
    }));

    afterEach(() => {
        fixture.destroy();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});
