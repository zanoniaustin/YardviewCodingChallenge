import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData(): any {
    this.http.get('http://localhost:8080/tasks').subscribe(data => {
      return console.log(data);
    });
  }

  getFilteredData(status: string): any {
    this.http.get(`http://localhost:8080/tasks?status=${status}`).subscribe(data => {
      return console.log(data);
    });
  }
  updateTask(id: String, status: String): any {
    this.http.put(`http://localhost:8080/tasks/${id}`, {status: status}).subscribe(response => {
      console.log('Task updated:', response);
    });
  }

  deleteTask(id: String): any {
    this.http.delete(`http://localhost:8080/tasks/${id}`).subscribe(response => {
      console.log('Task deleted:', response);
    });
  }

  addTask(title: String, description: String): any {
    this.http.post('http://localhost:8080/tasks', {title: title, description: description}).subscribe(response => {
      console.log('Task added:', response);
    });
  }
}
