import { Component, inject, model } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

export interface DialogData {
  task: string;
}

@Component({
  selector: 'update-status-dialog',
  templateUrl: 'update-status-dialog.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class UpdateStatusDialog {
  readonly dialogRef = inject(MatDialogRef<UpdateStatusDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly task = model(this.data.task);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
