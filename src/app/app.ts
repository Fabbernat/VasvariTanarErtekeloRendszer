import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('Vasvári Tanár Értekelő Rendszer');
  student = new Student();
}
