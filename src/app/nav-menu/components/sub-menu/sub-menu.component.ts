import { ChangeDetectionStrategy, Component, Output, EventEmitter, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'sub-menu',
    templateUrl: './sub-menu.component.html',
    styleUrls: ['./sub-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubMenuComponent {
    @Output()
    mouseenter2 = new EventEmitter();
    @Output()
    mouseleave2 = new EventEmitter();
  
    @Input()
    items: any;
  
    @ViewChild('childMenu', {static: true })
    public childMenu;
}
