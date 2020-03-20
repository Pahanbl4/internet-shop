import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'confirm-dialog',
    templateUrl: 'confirm-dialog.component.html',
    styleUrls: ['confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
    dialogTitle: string;

    dialogContent: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<ConfirmDialogComponent>
    ) {
        this.dialogTitle = data && data.title ? data.title : 'Confirmation';
        this.dialogContent = data && data.content ? data.content : 'Are you sure want to delete this item?';
    }

    onResult(status: boolean): void {
        this.dialogRef.close(status);
    }
}
