import { Injectable } from '@angular/core';
import { electrician } from '../../models/electrician.model';

@Injectable({
  providedIn: 'root'
})
export class ElectricianJuan {
  private person : electrician;

  constructor() {
    this.person = new electrician(
      'Juan',
      'electricista',
      '25',
      'Hombre',
      false,
      'Guayaquil',
      'HelpDesk',
      'UESS',
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