import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student/student';
import { Database } from './database/database';
import { Teacher } from './teacher/teacher';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('Vasvári Tanár Értekelő Rendszer');
  student: Student;
  
  constructor() {
    this.student = new Student();
    this.student.name = Database.getName();
  }

  onTeacherChange($event: Event) {
  throw new Error('Method not implemented.');
  }
}
