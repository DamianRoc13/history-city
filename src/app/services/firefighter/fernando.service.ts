import { Injectable } from '@angular/core';
import { firefighter } from '../../models/firefighter.model';

@Injectable({
  providedIn: 'root'
})
export class FirefighterFernando {
  private person : firefighter;

  constructor() {
    this.person = new firefighter(
      'Fernando',
      'bombero',
      '27',
      'Hombre',
      true,
      'Guayaquil',
      'General',
      true
    );
  }
  getPerson(): string {
    return `${this.person.name}`
  }
  
  getRol(): string {
    return `${this.person.rol}`
  }
}