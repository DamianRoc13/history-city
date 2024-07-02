import { Injectable } from '@angular/core';
import { nurse } from '../../models/nurse.model';

@Injectable({
  providedIn: 'root'
})
export class NurseAna {
  private person : nurse;

  constructor() {
    this.person = new nurse(
      'Ana',
      'enfermera',
      '25',
      'Mujer',
      true,
      'Guayaquil',
      '1',
      'Primeros Auxilios'
    );
  }
  getPerson(): string {
    return `${this.person.name}`
  }
  
  getRol(): string {
    return `${this.person.rol}`
  }
}