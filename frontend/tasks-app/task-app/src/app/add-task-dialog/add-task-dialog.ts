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
  title: string;
  description: string;
}

@Component({
  selector: 'add-task-dialog',
  templateUrl: 'add-task-dialog.html',
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
export class AddTaskDialog {
  readonly dialogRef = inject(MatDialogRef<AddTaskDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly add = model(this.data);

  onNoClick(): void {
    this.dialogRef.close();
  }
}