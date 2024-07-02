import { Component, OnInit} from '@angular/core';
import { Mayor } from '../../services/mayor/alfredo.service';
import { Citizen } from '../../services/citizen/jorgito.service';
import { DoctorGloria } from '../../services/doctor/gloria.service';
import { DoctorLuis } from '../../services/doctor/luis.service'; 
import { ElectricianDiego } from '../../services/electrician/diego.service';
import { ElectricianJuan } from '../../services/electrician/juan.service';
import { ElectricianMaria } from '../../services/electrician/maria.service';
import { FirefighterFernando } from '../../services/firefighter/fernando.service';
import { FirefighterPedro } from '../../services/firefighter/pedro.service'; 
import { NurseAna } from '../../services/nurse/ana.service';
import { NurseElena } from '../../services/nurse/elena.service';
import { PoliceCarlos } from '../../services/police/carlos.service';
import { PoliceJose } from '../../services/police/jose.service';
import { PolicePatricia } from '../../services/police/patricia.service'; 
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule,
    NzListModule,
    NzGridModule
  ],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})

export class StoriesComponent implements OnInit {
  
  //participaciones de ciudadanos
  person!: Citizen;
  

  //Historia
  //ntroduccion
  introMessage!: string;

  //inicio
  initMessage!: string;

  //desarrollo
  des1Message!: string;
  des2Message!: string;
  des3Message!: string;
  des4Message!: string;
  des5Message!: string;
  des6Message!: string;
  des7Message!: string;

  //final
  end1Message!: string;
  end2Message!: string;

//Nombres de ciudadanos
  nameLuisDC!: string;
  nameGloriaDC!: string;
  nameDiegoE!: string;
  nameJuanE!: string;
  nameMariaE!: string;
  nameFernandoF!: string;
  namePedroF!: string;
  nameAnaN!: string;
  nameElenaN!: string;
  nameCarlosP!: string;
  nameJoseP!: string;
  namePatriciaP!: string;
  nameJorguitoCN!: string;
  nameMayorA!: string;

  //roles de ciudadanos
  rolLuis!: string;
  rolGloria!: string;
  rolDiego!: string;
  rolJuan!: string;
  rolMaria!: string;
  rolFernando!: string;
  rolPedro!: string;
  rolAna!: string;
  rolElena!: string;
  rolCarlos!: string;
  rolJose!: string;
  rolPatricia!: string;
  rolJorguito!: string;
  rolMayor!: string;

  sections = ['intro', 'beginning', 'development', 'end', 'image'];
  currentIndex = 0;

  next() {
    if (this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  constructor(
    private citizen: Citizen,
    private mayor: Mayor,
    private doctorGloria: DoctorGloria,
    private doctorLuis: DoctorLuis,
    private electricianDiego: ElectricianDiego,
    private electricianJuan: ElectricianJuan,
    private electricianMaria: ElectricianMaria,
    private firefighterFernando: FirefighterFernando,
    private firefighterPedro: FirefighterPedro,
    private nurseAna: NurseAna,
    private nurseElena: NurseElena,
    private policeCarlos: PoliceCarlos,
    private policeJose: PoliceJose,
    private policePatricia: PolicePatricia
  ) { }
  ngOnInit(): void {

    //Introduccion
    this.introMessage = this.citizen.introText();

    //inicio
    this.initMessage = this.mayor.initHistory();

    //Desarrollo
    this.des1Message = this.electricianDiego.des1();
    this.des2Message = this.citizen.des2();
    this.des3Message = this.citizen.des3();
    this.des4Message = this.citizen.des4();
    this.des5Message = this.citizen.des5();
    this.des6Message = this.citizen.des6();
    this.des7Message = this.citizen.des7();

    //Fin
    this.end1Message = this.citizen.end1();
    this.end2Message = this.mayor.end2();

    //get de nombres
    this.nameMayorA = this.mayor.getPerson()
    this.nameAnaN = this.nurseAna.getPerson();
    this.nameCarlosP = this.policeCarlos.getPerson();
    this.nameDiegoE = this.electricianDiego.getPerson();
    this.nameElenaN = this.nurseElena.getPerson();
    this.nameFernandoF = this.firefighterFernando.getPerson();
    this.nameJoseP = this.policeJose.getPerson();
    this.nameJuanE = this.electricianJuan.getPerson();
    this.nameGloriaDC = this.doctorGloria.getPerson();
    this.nameLuisDC = this.doctorLuis.getPerson();
    this.nameMariaE = this.electricianMaria.getPerson();
    this.nameJorguitoCN = this.citizen.getPerson();
    this.namePatriciaP = this.policePatricia.getPerson();
    this.namePedroF = this.firefighterPedro.getPerson();

    //get de roles
    this.rolMayor = this.mayor.getRol();
    this.rolAna = this.nurseAna.getRol();
    this.rolCarlos = this.policeCarlos.getRol();
    this.rolDiego = this.electricianDiego.getRol();
    this.rolElena = this.nurseElena.getRol();
    this.rolFernando = this.firefighterFernando.getRol();
    this.rolJose = this.policeJose.getRol();
    this.rolJuan = this.electricianJuan.getRol();
    this.rolGloria = this.doctorGloria.getRol();
    this.rolLuis = this.doctorLuis.getRol();
    this.rolMaria = this.electricianMaria.getRol();
    this.rolJorguito = this.citizen.getRol();
    this.rolPatricia = this.policePatricia.getRol();
    this.rolPedro = this.firefighterPedro.getRol();
    

    }
}


