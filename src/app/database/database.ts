import { Component } from '@angular/core';
import { Teacher } from '../teacher/teacher';

@Component({
  selector: 'app-database',
  imports: [],
  templateUrl: './database.html',
  styleUrl: './database.sass'
})
export class Database {

  name: string = "Gyuris Áron";
  teachers: string[] = ["Kovács Katalin", "Nagy Péter", "Szabó Anna"];

  constructor() {
    const teachers: string[] = ["Kovács Katalin", "Nagy Péter", "Szabó Anna"];
    const customName: string = "Gyuris Áron";
    this.name = customName;
    this.teachers = teachers;
  }

  static getName(): string {
    return "Gyuris Áron";
  }

  static getTeachers() {
    return [
      new Teacher(),
      new Teacher(),
      new Teacher()
    ];
  }
}
