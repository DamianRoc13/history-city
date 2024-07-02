import { Injectable } from '@angular/core';
import { electrician } from '../../models/electrician.model';

@Injectable({
  providedIn: 'root'
})
export class ElectricianMaria {
  private person : electrician;

  constructor() {
    this.person = new electrician(
      'Maria',
      'electricista',
      '35',
      'Mujer',
      true,
      'Guayaquil',
      'officer',
      'UEG',
    );
  }
  getPerson(): string {
    return `${this.person.name}`
  }
  
  getRol(): string {
    return `${this.person.rol}`
  }
  des1() : string{
    return this.person.des1();
  }
}