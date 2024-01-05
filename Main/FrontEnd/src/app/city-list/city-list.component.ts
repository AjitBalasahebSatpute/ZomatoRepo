import { Component, OnInit } from '@angular/core';
import { cityDetails } from '../Model/city.model';
import { ListService } from '../Services/List.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent implements OnInit {

    cityList !: cityDetails[];

    constructor(private listService:ListService){
    
    }
    
    ngOnInit(): void {
      this.listService.cityList().subscribe(

        (response) =>{
          // console.log(response[0].cityName);
          this.cityList= response;
          console.log(this.cityList); 
          
        },
        (error:Error) =>{
          console.log("we mate error!",error.message);
        }
        
        
      );
  }




}
