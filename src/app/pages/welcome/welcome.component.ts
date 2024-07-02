import { Component, OnInit } from '@angular/core';
import { StoriesComponent} from '../../components/stories/stories.component'; 

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [StoriesComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
