import { Injectable } from '@angular/core';
import { electrician } from '../../models/electrician.model';

@Injectable({
  providedIn: 'root'
})
export class ElectricianDiego {
  private person : electrician;

  constructor() {
    this.person = new electrician(
      'Diego',
      'electricista',
      '26',
      'Hombre',
      true,
      'Guayaquil',
      'instalator',
      'Espol',
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