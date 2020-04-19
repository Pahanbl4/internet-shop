import { ChangeDetectionStrategy, Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { BasketPopupComponent } from 'app/basket-popup/basket-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { BasketState } from 'app/basket-popup/store/basket-popup.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

  @Select(BasketState.cost) cost$: Observable<number>;

  @Input() searchDebounceTime = 300;

  @Input() showSearch = true;

  @Input() showSearchHint = false;

  @Input() title: string;

  @Input() searchTerm: string;

  @Output() searchChanged = new EventEmitter<string>();

  mobilePhones = [
    '+375331234567',
    '+375339876543'
  ];

  email = 'e-commerce@support.com'

  name: string;

  description: string;

  constructor(public store: Store,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.name = 'E-commerce';
    this.description = 'Trusted Everywhere'
  }

  onLogin(): void {
    this.store.dispatch(new Navigate(['login']))
  }

  onOpenBasket(): void {
    this.dialog
      .open(BasketPopupComponent, {

        panelClass: 'huge-dialog'
      });
  }
}
