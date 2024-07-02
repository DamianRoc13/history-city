import { Injectable } from '@angular/core';
import { doctor } from '../../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorLuis {
  private person : doctor;

  constructor() {
    this.person = new doctor(
      'Luis',
      'doctor',
      '35',
      'Hombre',
      false,
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