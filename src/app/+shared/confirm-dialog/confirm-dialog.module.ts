import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { ConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
    declarations: [
        ConfirmDialogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule
    ],
    exports: [
        ConfirmDialogComponent
    ],
    entryComponents: [
        ConfirmDialogComponent
    ]
})
export class ConfirmDialogModule { }
