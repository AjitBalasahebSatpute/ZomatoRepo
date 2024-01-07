import { Component,Input } from '@angular/core';
import { RestaurentModel } from '../../../Model/Restaurent-card';

@Component({
  selector: 'app-restaurent-card',
  templateUrl: './restaurent-card.component.html',
  styleUrl: './restaurent-card.component.css'
})
export class RestaurentCardComponent {

 @Input() restaurentCard!:RestaurentModel;

}
