import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
    let component: ToolbarComponent;
    let fixture: ComponentFixture<ToolbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ToolbarComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(ToolbarComponent);
        component = fixture.componentInstance;
    }));

    afterEach(() => {
        fixture.destroy();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});
