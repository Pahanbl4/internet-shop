import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public store: Store) {}

  ngOnInit() {}
  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    this.store.dispatch(new Navigate(['admin/dashboard']));
  }
}
