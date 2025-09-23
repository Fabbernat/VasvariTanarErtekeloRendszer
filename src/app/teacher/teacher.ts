import { Component, Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-teacher',
  imports: [],
  templateUrl: './teacher.html',
  styleUrl: './teacher.sass'
})

@Injectable({myName?: string})
export class Teacher {
  id: number;
  name: string;
  static nextId: number = 1;

  constructor(myName?: string) {
    this.id = Teacher.nextId++;
    this.name = myName ?? randomName(); // if no name is given, generate a random one
  }
}
  
  function randomName(): string {
  const randomNames: string[] = [
    "Kovács Katalin", "Nagy Péter", "Szabó Anna", "Tóth László", "Farkas Eszter",
    "Varga János", "Molnár Éva", "Kiss Gábor", "Horváth Zoltán", "Balogh Mária",
    "Szűcs Tamás", "Papp Zsuzsanna", "Kerekes István", "Fekete Andrea", "Németh Dániel",
    "Szalai Viktória", "Kálmán Attila", "Lukács Réka", "Vincze Gergely", "Bognár Anikó"
  ];

  const index = Math.floor(Math.random() * randomNames.length);
  return randomNames[index];
}