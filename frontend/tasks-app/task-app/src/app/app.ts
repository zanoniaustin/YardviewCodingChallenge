import { Component, signal } from '@angular/core';
import {Tasks} from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Tasks],
  template: ` <main>
      <h1>{{ title }}</h1>
      <section class="content">
        <app-tasks />
      </section>
    </main> `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Task Manager';
}