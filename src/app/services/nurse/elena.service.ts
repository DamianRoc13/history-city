import { Injectable } from '@angular/core';
import { nurse } from '../../models/nurse.model';

@Injectable({
  providedIn: 'root'
})
export class NurseElena {
  private person : nurse;

  constructor() {
    this.person = new nurse(
      'Elena',
      'enfermera',
      '40',
      'Mujer',
      true,
      'Guayaquil',
      '12',
      'Cirujana'
    );
  }
  getPerson(): string {
    return `${this.person.name}`
  }
  
  getRol(): string {
    return `${this.person.rol}`
  }
}