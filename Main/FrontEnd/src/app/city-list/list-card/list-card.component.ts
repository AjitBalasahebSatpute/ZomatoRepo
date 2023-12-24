import { Component, Input } from '@angular/core';
import { cityDetails } from '../../Model/city.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent {

  @Input('cityDetails') cityObj!:cityDetails; 

}
