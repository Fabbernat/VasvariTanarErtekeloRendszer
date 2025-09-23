import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  imports: [],
  templateUrl: './teacher.html',
  styleUrl: './teacher.sass'
})
export class Teacher {
  id: number;
  name: string;
  static nextId: number = 1;

  constructor(customName: string) {
    this.id = Teacher.nextId++;
    this.name = customName;
  }
}
