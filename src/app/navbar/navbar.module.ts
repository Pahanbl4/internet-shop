import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavMenuModule } from '../nav-menu/nav-menu.module';

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        MatIconModule,
        MatButtonModule,
        NavMenuModule,
        CommonModule
    ],
    exports: [NavbarComponent]
})
export class NavbarModule { }
