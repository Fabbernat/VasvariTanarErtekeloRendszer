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

  constructor() {
    this.id = Teacher.nextId++;
    this.name = randomName();
  }
}
function randomName(): string {
  const randomNames: string[] = ["Kovács Katalin", "Nagy Péter", "Szabó Anna", "Tóth László", "Farkas Eszter", "Varga János", "Molnár Éva", "Kiss Gábor", "Horváth Zoltán", "Balogh Mária", "Szűcs Tamás", "Papp Zsuzsanna", "Kerekes István", "Fekete Andrea", "Németh Dániel", "Szalai Viktória", "Kálmán Attila", "Lukács Réka", "Vincze Gergely", "Bognár Anikó"];

  const index = Math.floor(Math.random() * randomNames.length);
  return randomNames[index];
}

