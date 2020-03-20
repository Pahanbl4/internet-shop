import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { SearchBarComponent } from './search-bar.component';

@NgModule({
    exports: [SearchBarComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        MatInputModule,
        MatRippleModule,
        ReactiveFormsModule
    ],
    declarations: [SearchBarComponent]
})
export class SearchBarModule { }
