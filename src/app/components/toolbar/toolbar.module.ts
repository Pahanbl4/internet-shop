import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { ToolbarComponent } from './toolbar.component';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

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
        NgxsRouterPluginModule.forRoot(),
        SearchBarModule
    ],
    exports: [...components]
})
export class ToolbarModule { }