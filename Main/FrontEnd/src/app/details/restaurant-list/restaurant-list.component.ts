import { Component,OnChanges,OnDestroy,OnInit, SimpleChanges } from '@angular/core';
import { RestaurentModel } from '../../Model/Restaurent-card';
import { ListService } from '../../Services/List.service';
import {Observable, Subscription} from 'rxjs'
import { error } from 'node:console';
import { Params } from '@angular/router';



@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent implements OnInit , OnDestroy{
  restaurentList:RestaurentModel[]=[];
  // restaurentList:RestaurentModel[]=new loca
  listSub= new Subscription();

  constructor(private listService:ListService){}
  ngOnInit(): void { // sends the request to service to preper the list and set subject value  
    this.listService.restaurentListService(this.listService.pincode); 
    this.listSub= this.listService.RestoListSubject.subscribe((data:RestaurentModel[])=>{this.restaurentList=data}); // getting this value from list (centralised location) 
  console.log(this.restaurentList)
  }

  ngOnDestroy(): void {this.listSub.unsubscribe();}



  

  // restaurentList:[RestaurentModel]=[
  //   {
  //     "restaurentID":1,
  //     "imagePath": "https://b.zmtcdn.com/data/pictures/chains/4/10624/53a96bd95a58594f3d783df84b281c7c_o2_featured_v2.jpg",
  //   "rating": 3.7,
  //   "price": 200,
  // "distance": 31,
  //   "ownerEmail": "check15@gmail.com",
  //   "cityName": "Pandharpur",
  //   "pinCode": 413301,
  //   "restaurentName": "KFC",
  //   "speciality": ['pizza,','fast food special']
  //   }
  // ]
  /* 
  {
    "imagePath": "https://b.zmtcdn.com/data/pictures/chains/4/10624/53a96bd95a58594f3d783df84b281c7c_o2_featured_v2.jpg",
    "rating": 3.7,
    "price": 200,
  "distance": 31,
    "ownerEmail": "check15@gmail.com",
    "cityName": "Pandharpur",
    "pinCode": 413301,
    "restaurentName": "KFC",
    "speciality": [
        "Pizza",
        ", Pasta",
         "Momos",
          "Fast F"
    ]
}
  */

}
