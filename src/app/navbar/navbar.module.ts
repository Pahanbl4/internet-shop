import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

import { NavMenuModule } from '../nav-menu/nav-menu.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        NavMenuModule
    ],
    exports: [NavbarComponent]
})
export class NavbarModule { }
