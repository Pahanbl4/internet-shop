import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        MatIconModule,
        MatButtonModule,
        CommonModule
    ],
    exports: [NavbarComponent]
})
export class NavbarModule { }
