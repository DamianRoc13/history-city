import { Injectable } from '@angular/core';
import { firefighter } from '../../models/firefighter.model';

@Injectable({
  providedIn: 'root'
})
export class FirefighterPedro {
  private person : firefighter;

  constructor() {
    this.person = new firefighter(
      'Pedro',
      'bombero',
      '25',
      'Hombre',
      true,
      'Guayaquil',
      'cabo',
      false
    );
  }
  getPerson(): string {
    return `${this.person.name}`
  }
  
  getRol(): string {
    return `${this.person.rol}`
  }
}