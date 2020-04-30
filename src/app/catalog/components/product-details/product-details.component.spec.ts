import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
    let component: ProductDetailsComponent;
    let fixture: ComponentFixture<ProductDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductDetailsComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(ProductDetailsComponent);
        component = fixture.componentInstance;
    }));

    afterEach(() => {
        fixture.destroy();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});
