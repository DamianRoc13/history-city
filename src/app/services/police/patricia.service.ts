import { Injectable } from '@angular/core';
import { police } from '../../models/police.model';

@Injectable({
  providedIn: 'root'
})
export class PolicePatricia {
  private person : police;

  constructor() {
    this.person = new police(
      'Patricia',
      'policia',
      '25',
      'Mujer',
      true,
      'Guayaquil',
      'Official',
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