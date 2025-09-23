import { Component } from '@angular/core';
import { Teacher } from '../teacher/teacher';

@Component({
  selector: 'app-database',
  imports: [],
  templateUrl: './database.html',
  styleUrl: './database.sass'
})
export class Database {

  static name: string = "Gipsz Jakab";
  static teachers: string[] = ["Kovács Katalin", "Nagy Péter", "Szabó Anna"];

  constructor() {}

  static getName(): string {
    return Database.name;
  }

  static getTeachers(): string[] {
    return Database.teachers;
  }
}
