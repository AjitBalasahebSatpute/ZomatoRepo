import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{


  ngOnInit(){
    window.scrollTo(0,0);
  }
}
