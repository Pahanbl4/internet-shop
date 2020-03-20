import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar.component';
import { SearchBarModule } from '../search-bar/search-bar.module';

const components = [
    ToolbarComponent
];
@NgModule({
    declarations: [...components],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatTooltipModule,
        SearchBarModule
    ],
    exports: [...components]
})
export class ToolbarModule { }