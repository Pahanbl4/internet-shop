import { ChangeDetectionStrategy, Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
    @Input() searchDebounceTime = 300;

    @Input() showSearch = true;

    @Input() showSearchHint = false;

    @Input() title: string;

    @Input() searchTerm: string;

    @Output() searchChanged = new EventEmitter<string>();

    name: string;

    description: string;

    constructor() { }

    ngOnInit(): void {
        this.name = 'E-commerce';
        this.description = 'Trusted Everywhere'
    }
}
