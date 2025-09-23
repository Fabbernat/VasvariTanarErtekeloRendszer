import { Component } from '@angular/core';

@Component({
  selector: 'app-database',
  imports: [],
  templateUrl: './database.html',
  styleUrl: './database.sass'
})
export class Database {
  static getName(): string {
    return "Gipsz Jakab";
  }
}
