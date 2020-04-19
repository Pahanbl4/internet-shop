import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';

const components = [
    NavMenuComponent,
    SubMenuComponent
];
@NgModule({
    declarations: [...components],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule
    ],
    exports: [...components]
})
export class NavMenuModule { }
