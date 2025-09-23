import { Component } from '@angular/core';
import { Teacher } from '../teacher/teacher';

@Component({
  selector: 'app-database',
  imports: [],
  templateUrl: './database.html',
  styleUrl: './database.sass'
})
export class Database {

  name: string = "Gipsz Jakab";
  teachers: string[] = ["Kovács Katalin", "Nagy Péter", "Szabó Anna"];

  constructor(customName: string, teachers: string[]) {
    this.name = customName;
    this.teachers = teachers;
  }

  static getName(): string {
    return "Gipsz Jakab";
  }

  static getTeachers() {
    return [
      new Teacher("Kovács Katalin"),
      new Teacher("Nagy Péter"),
      new Teacher("Szabó Anna")
    ];
  }
}
