import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SubMenuComponent } from './sub-menu.component';

describe('SubMenuComponent', () => {
    let component: SubMenuComponent;
    let fixture: ComponentFixture<SubMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SubMenuComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(SubMenuComponent);
        component = fixture.componentInstance;
    }));

    afterEach(() => {
        fixture.destroy();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});
