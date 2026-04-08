import { Component, inject, signal } from '@angular/core';
import { DataService } from '../services/data-service';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatDialog } from '@angular/material/dialog';
import { UpdateStatusDialog } from '../update-status-dialog/update-status-dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog';
import { AddTaskDialog } from '../add-task-dialog/add-task-dialog';
import { ErrorDialog } from '../error-dialog/error-dialog';

export interface Task {
  id: String;
  title: string;
  description: string;
  status: string;
  created_at: string;
}

const TASK_DATA: Task[] = [
  {id: "1", title: "Another one",description: "Complete project 123", status: "todo", created_at: "2026-04-07 16:45:13"},
  {id: "2", title: "Another one",description: "Complete project 123", status: "todo", created_at: "2026-04-07 16:45:13"},
  {id: "3", title: "Task 2", description: "Review project documentation", status: "in_progress", created_at: "2026-04-08 10:30:00"},
  {id: "4", title: "Task 3", description: "Update dependencies", status: "done", created_at: "2026-04-09 14:15:00"},
  {id: "5", title: "Another one",description: "Complete project 123", status: "todo", created_at: "2026-04-07 16:45:13"},
];

@Component({
  selector: 'app-tasks',
  imports: [MatTableModule,MatIconModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  constructor(private service: DataService) {}

  readonly task = signal('');
  readonly dialog = inject(MatDialog);

  filterStatus: string = '';

  displayedColumns: string[] = ['title', 'description', 'status', 'created_at', 'actions'];
  dataSource = TASK_DATA;

  getTasks() { 
    let data = this.service.getData(); 
    console.log('Tasks retrieved!'); 
  }

  getFilteredTasks() { 
    let data = this.service.getFilteredData(this.filterStatus); 
    console.log('Filtered tasks retrieved!'); 
  }

  openDeleteDialog(row: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteTask(row.id);
        console.log("Deleting task");
      }
    });
  }

  openEditDialog(row: any): void {
    const dialogRef = this.dialog.open(UpdateStatusDialog, {
      data: {task: this.task()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log('Status Updated:', result);
        this.service.updateTask(row.id, result);
      }
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialog, {
      data: {title: '', description: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log('Task Added:', result);
        this.service.addTask(result.title, result.description);
      }
    });
  }

  openErrorDialog(error: string): void {
      alert('An error occurred. Please try again.');
  }
}