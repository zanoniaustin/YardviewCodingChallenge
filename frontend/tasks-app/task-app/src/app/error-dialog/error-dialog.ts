import { Component, Inject, OnInit  } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'error-dialog',
  templateUrl: 'error-dialog.html',
  imports: [
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
})
export class ErrorDialog implements OnInit {
  error: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any) {
    this.error = data.error;

  }

  ngOnInit() {
    
  }
}