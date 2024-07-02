import { Injectable } from '@angular/core';
import { doctor } from '../../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorGloria {
  private person : doctor;

  constructor() {
    this.person = new doctor(
      'Gloria',
      'doctora',
      '27',
      'Mujer',
      true,
      'Guayaquil',
      'IESS',
      'Medicina General',
    );
  }
  getPerson(): string {
    return `${this.person.name}`
  }
  
  getRol(): string {
    return `${this.person.rol}`
  }
  
}