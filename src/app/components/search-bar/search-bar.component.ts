import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'search-bar',
    templateUrl: 'search-bar.component.html',
    styleUrls: ['search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    @Input() searchDebounceTime = 300;

    @Input() showSearchHint = false;

    @Input()
    set title(title: string) {
        this.placeholder = `${title || 'Поиск по сайту...'}`;
    }

    @Input()
    set searchTerm(searchTerm: string) {
        this.searchControl.setValue(searchTerm);
        this.lastSearch = searchTerm;
    }

    @Output() searchChange = new EventEmitter<string>();

    placeholder: string;

    searchControl = new FormControl('');

    lastSearch = '';

    ngOnInit(): void {
        this.searchControl.valueChanges.pipe(
            debounceTime(this.searchDebounceTime),
            distinctUntilChanged(),
            filter(x => x !== this.lastSearch)
        ).subscribe(search => {
            this.lastSearch = search;
            this.searchChange.emit(search);
        });
    }

    onCancel(): void {
        this.searchControl.reset('');
    }

}
