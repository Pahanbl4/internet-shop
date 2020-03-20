import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SearchBarComponent } from './search-bar.component';


describe('SearchBarComponent', () => {
    let component: SearchBarComponent;
    let fixture: ComponentFixture<SearchBarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchBarComponent],
            imports: [
                NoopAnimationsModule
            ],
            providers: [],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(SearchBarComponent);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('title should set placeholder', () => {
        component.title = '1';

        expect(component.placeholder).toBe(' 1');
    });

    it('searchTerm should set searchControl value and last search', () => {
        spyOn(component.searchControl, 'setValue');

        component.searchTerm = '1';

        expect(component.searchControl.setValue).toHaveBeenCalledWith('1');
        expect(component.lastSearch).toBe('1');
    });

});
