import { NgModule } from '@angular/core';

import { ConfirmDialogModule } from '../confirm-dialog/confirm-dialog.module';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';

@NgModule({
    imports: [
        ConfirmDialogModule
    ],
    providers: [
        UnsavedChangesGuard
    ]
})
export class UnsavedChangesModule {
}
