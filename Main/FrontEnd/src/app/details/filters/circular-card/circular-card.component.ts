import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circular-card',
  templateUrl: './circular-card.component.html',
  styleUrl: './circular-card.component.css'
})
export class CircularCardComponent {

@Input('FillData') inputeData!:any;

}
