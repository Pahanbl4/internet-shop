import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';

const components = [
    NavMenuComponent,
    SubMenuComponent
];
@NgModule({
    declarations: [...components],
    imports: [
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        CommonModule
    ],
    exports: [...components]
})
export class NavMenuModule { }
