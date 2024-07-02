import { Injectable } from '@angular/core';
import { mayor } from '../../models/mayor.model';

@Injectable({
  providedIn: 'root'
})
export class Mayor {
  private person : mayor;

  constructor() {
    this.person = new mayor(
      'Alfredo Gonzales',
      'alcalde',
      '45',
      'Hombre',
      true,
      'Guayaquil',
      '4',
      'alcalde',
    );
  }


getPerson(): string {
  return `${this.person.name}`
}

getRol(): string {
  return `${this.person.rol}`
}

initHistory(): string {
  return this.person.initHistory();
}

end2(): string {
  return this.person.end2();
}

}